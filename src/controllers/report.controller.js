import { File, Dolos } from "@dodona/dolos-lib";
import readContentFromUrl from "../utils/readContentFromUrl.js";

const createReportController = async (req) => {
  try {
    // Check if the request body has the required fields
    if (
      !req.body.code_submissions_data ||
      !req.body.report_name ||
      !req.body.language
    ) {
      return {
        statusCode: 400,
        status: "error",
        message: "Missing required fields",
      };
    }

    const codeSubmissions = req.body.code_submissions_data;
    const reportName = req.body.report_name;
    const language = req.body.language;

    const dolos = new Dolos({ reportName: reportName, language: language });
    const dolosFiles = [];

    for (let i = 0; i < codeSubmissions.length; i++) {
      const createdAt = new Date(codeSubmissions[i].extra.created_at);
      const filename = `${codeSubmissions[i].extra.student_id}`;
      const content = await readContentFromUrl(codeSubmissions[i].url);

      const file = new File(
        filename,
        content,
        {
          id: i,
          questionId: codeSubmissions[i].extra.question_id,
          questionName: codeSubmissions[i].extra.question_name,
          studentId: codeSubmissions[i].extra.student_id, 
          studentName: codeSubmissions[i].extra.student_name,
          filename: filename,
          fullName: filename,
          status: "",
          submissionID: codeSubmissions[i].extra.submission_id,
          nameEN: "",
          nameNL: "",
          exerciseID: "",
          createdAt: createdAt,
          labels: codeSubmissions[i].extra.labels,
        },
        i
      );

      dolosFiles.push(file);
    }

    const reportResult = await dolos.analyze(dolosFiles);

    // build fragments for each pair
    const newPairs = [];
    for (const pair of reportResult.allPairs()) {
      const newLeftFile = pair.leftFile.file;
      const newRightFile = pair.rightFile.file;
      let newPair = {
        id: pair.id,
        leftFile: newLeftFile,
        rightFile: newRightFile,
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
          }
        };

        newBuildFragments.push(newFragment);
      }

      newPair.fragments = newBuildFragments;
      newPairs.push(newPair);
    }

    const reportResultIndex = reportResult.index;
    const kgramLength = reportResultIndex.kgramLength;
    const newFiles = reportResult.files.map((file) => {
      const tempFile = file.file;
      const extra = tempFile.extra;
      return {
        ...tempFile,
        amountOfKgrams: kgramLength,
        extra: {
          ...extra,
        },
      };
    });

    const resultTemplate = {
      language: {
        name: reportResult.language?.name,
        extensions: reportResult.language?.extensions,
      },
      files: newFiles,
      pairs: newPairs,
      createdAt: reportResult.createdAt,
      name: reportResult.name,
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

export default createReportController;
