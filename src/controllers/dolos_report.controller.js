import { Dolos, File } from "@dodona/dolos-lib";
import { v4 as uuidv4 } from "uuid";
import languages from "../constants/languages.js";
import codeSubmissionModel from "../models/code_submission.model.js";
import dolosReportModel from "../models/dolos_report.model.js";
import userModel from "../models/user.model.js";
import codeQuestionModel from "../models/code_question.model.js";

const upsertDolosReportController = async (req) => {
  try {
    // Check if the request body has the required fields
    if (
      !req.body.code_question_ids ||
      !req.body.user_id ||
      !req.body.report_name ||
      !req.body.language
    ) {
      return {
        statusCode: 400,
        status: "error",
        message: "Missing required fields",
      };
    }

    const userId = req.body.user_id;
    const checkUser = await userModel.findById(userId);
    if (!checkUser) {
      return {
        statusCode: 404,
        status: "error",
        message: "User not found",
      };
    }

    if (checkUser.role.toString() === "2") {
      return {
        statusCode: 403,
        status: "error",
        message: "Forbidden",
      };
    }

    const reportName = req.body.report_name;
    const codeQuestionIds = req.body.code_question_ids;
    const programmingLanguageValue = languages.find(
      (lang) => lang.name.toUpperCase() === req.body.language.toUpperCase()
    )?.value;
    const checkReportExist =
      await dolosReportModel.findFirstByComparedCodeQuestionIds(
        codeQuestionIds
      );

    const codeSubmissions = [];
    for (const codeQuestionId of codeQuestionIds) {
      const codeSubmissionsByCodeQuestion = await codeSubmissionModel.findAll({
        code_question_id: codeQuestionId,
      });

      if (!codeSubmissionsByCodeQuestion) {
        return {
          statusCode: 500,
          status: "error",
          message: "Failed to fetch code submissions",
        };
      }

      for (const codeSubmission of codeSubmissionsByCodeQuestion) {
        codeSubmissions.push(codeSubmission);
      }
    }

    const dolos = new Dolos({
      reportName,
      language: programmingLanguageValue,
    });
    const dolosFiles = [];

    for (let i = 0; i < codeSubmissions.length; i++) {
      const createdAt = new Date(codeSubmissions[i].created_at);
      const filename = `${codeSubmissions[i].user_unique_id}`;
      const content = codeSubmissions[i].source_code;

      const file = new File(
        filename,
        content,
        {
          id: i,
          questionId: codeSubmissions[i].code_question_id,
          questionName: codeSubmissions[i].code_question_title,
          userId: codeSubmissions[i].user_id,
          orgUserId: codeSubmissions[i].org_user_id,
          userFullName: codeSubmissions[i].user_fullname,
          programmingLanguage: codeSubmissions[i].programming_language_name,
          filename: filename,
          fullName: filename,
          status: "",
          submissionID: "",
          nameEN: "",
          nameNL: "",
          exerciseID: "",
          createdAt: createdAt,
          labels: "",
        },
        i
      );

      dolosFiles.push(file);
    }

    const reportResult = await dolos.analyze(dolosFiles);
    const reportResultIndex = reportResult.index;
    const kgramLength = reportResultIndex.kgramLength;

    // build fragments for each pair
    const newPairs = [];
    for (const pair of reportResult.allPairs()) {
      const newLeftFile = pair.leftFile.file;
      const newRightFile = pair.rightFile.file;
      let newPair = {
        id: pair.id,
        leftFile: {
          ...newLeftFile,
          amountOfKgrams: kgramLength,
        },
        rightFile: {
          ...newRightFile,
          amountOfKgrams: kgramLength,
        },
        leftCovered: pair.leftCovered,
        rightCovered: pair.rightCovered,
        leftTotal: pair.leftTotal,
        rightTotal: pair.rightTotal,
        longestFragment: pair.longest,
        similarity: pair.similarity,
        totalOverlap: pair.overlap,
        fragments: [],
      };

      const newBuildFragments = [];
      for (const fragment of pair.buildFragments()) {
        const left = fragment.leftSelection;
        const right = fragment.rightSelection;
        const newFragment = {
          left: {
            startRow: left.startRow,
            startCol: left.startCol,
            endRow: left.endRow,
            endCol: left.endCol,
          },
          right: {
            startRow: right.startRow,
            startCol: right.startCol,
            endRow: right.endRow,
            endCol: right.endCol,
          },
        };

        newBuildFragments.push(newFragment);
      }

      newPair.fragments = newBuildFragments;
      newPairs.push(newPair);
    }

    const programmingLanguage = {
      name: reportResult.language?.name || "",
      extensions: reportResult.language?.extensions || [],
    };

    const reportUUID = checkReportExist?.id || uuidv4();
    try {
      const createAt = new Date(reportResult.createdAt);
      const ret = await dolosReportModel.upsert({
        id: reportUUID,
        name: reportName,
        programming_language_name: programmingLanguage.name,
        programming_language_extensions: JSON.stringify(
          programmingLanguage.extensions
        ),
        compared_code_question_ids: JSON.stringify(codeQuestionIds),
        pairs_json_content: JSON.stringify(newPairs),
        user_id: userId,
        created_at: createAt,
        updated_at: createAt,
      });

      const resultTemplate = {
        id: reportUUID,
        language: programmingLanguage,
        pairs: newPairs,
        createdAt: reportResult.createdAt,
        name: reportResult.name,
      };

      if (!ret || ret.length === 0) {
        return {
          statusCode: 500,
          status: "error",
          message: "Failed to save report",
        };
      } else {
        return {
          statusCode: 201,
          status: "success",
          data: resultTemplate,
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        status: "error",
        message: error.message,
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      status: "error",
      message: error.message,
    };
  }
};

const getDolosReportByIdController = async (req) => {
  try {
    const reportId = req.params.reportId;
    const report = await dolosReportModel.findById(reportId);

    if (!report) {
      return {
        statusCode: 404,
        status: "error",
        message: "Report not found",
      };
    }

    const pairs = JSON.parse(report.pairs_json_content);
    const programmingLanguage = {
      name: report.programming_language_name,
      extensions: JSON.parse(report.programming_language_extensions),
    };

    const resultTemplate = {
      language: programmingLanguage,
      pairs: pairs,
      createdAt: report.created_at,
      name: report.name,
    };

    return {
      statusCode: 200,
      status: "success",
      data: resultTemplate,
    };
  } catch (error) {
    return {
      statusCode: 500,
      status: "error",
      message: error.message,
    };
  }
};

const getAllDolosReportsController = async () => {
  try {
    const reports = await dolosReportModel.findAll();

    const resultTemplate = [];

    for (const report of reports) {
      const comparedCodeQuestions = [];
      for (const codeQuestionId of JSON.parse(
        report.compared_code_question_ids
      )) {
        const codeQuestion = await codeQuestionModel.findById(codeQuestionId);
        if (codeQuestion) {
          comparedCodeQuestions.push({
            id: codeQuestionId,
            title: codeQuestion.title,
          });
        }
      }

      resultTemplate.push({
        id: report.id,
        comparedCodeQuestions,
        language: {
          name: report.programming_language_name,
          extensions: JSON.parse(report.programming_language_extensions),
        },
        createdAt: report.created_at,
        name: report.name,
      });
    }

    return {
      statusCode: 200,
      status: "success",
      data: resultTemplate,
    };
  } catch (error) {
    return {
      statusCode: 500,
      status: "error",
      message: error.message,
    };
  }
};

const checkDolosReportWithCodeQuestionIdsExistController = async (req) => {
  try {
    const codeQuestionIds = req.body.code_question_ids;
    const report = await dolosReportModel.findFirstByComparedCodeQuestionIds(
      codeQuestionIds
    );

    if (!report) {
      return {
        statusCode: 200,
        status: "success",
        data: null,
      };
    }

    const dataTemplate = {
      id: report.id,
      name: report.name,
      programming_language_name: report.programming_language_name,
      programming_language_extensions: JSON.parse(
        report.programming_language_extensions
      ),
      compared_code_question_ids: JSON.parse(report.compared_code_question_ids),
      user_id: report.user_id,
      created_at: report.created_at,
      updated_at: report.updated_at,
    };

    return {
      statusCode: 200,
      status: "success",
      data: dataTemplate,
    };
  } catch (error) {
    return {
      statusCode: 500,
      status: "error",
      message: error.message,
    };
  }
};

export default {
  checkDolosReportWithCodeQuestionIdsExistController,
  getAllDolosReportsController,
  getDolosReportByIdController,
  upsertDolosReportController,
};
