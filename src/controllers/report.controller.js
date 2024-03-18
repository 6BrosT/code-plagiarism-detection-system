import { Dolos } from "@dodona/dolos-lib";
import readRemoteFileUrlToDolosFile from "../utils/readRemoteFileUrlToDolosFile.js";

const createReportController = async (req) => {
  try {
    // Check if the request body has the required fields
    if (!req.body.code_submissions_data || !req.body.report_name) {
      return {
        statusCode: 400,
        status: "error",
        message: "Missing required fields",
      };
    }

    const codeSubmissions = req.body.code_submissions_data;
    const reportName = req.body.report_name;

    const dolos = new Dolos({ reportName: reportName });
    const dolosFiles = [];

    for (let i = 0; i < codeSubmissions.length; i++) {
      const extra = codeSubmissions[i].extra;
      const filename = codeSubmissions[i].url.split("/").pop();

      const file = await readRemoteFileUrlToDolosFile({
        id: i,
        url: codeSubmissions[i].url,
        extra: {
          filename: filename,
          fullName: filename,
          id: i.toString(),
          status: "",
          submissionID: "",
          nameEN: "",
          nameNL: "",
          exerciseID: "",
          createdAt: new Date(extra.created_at),
          labels: extra.labels,
        },
      });
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
        highestSimilarity: pair.similarity,
        totalOverlap: pair.overlap,
        buildFragments: [],
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

      newPair.buildFragments = newBuildFragments;
      newPairs.push(newPair);
    }

    const newFiles = reportResult.files.map((file) => {
      const tempFile = file.file;
      return {
        ...tempFile,
        highestSimilarity: 0,
      };
    });

    const labelUnique = new Set();
    for (const pair of newPairs) {
      if (pair.leftFile.extra) {
        labelUnique.add(pair.leftFile.extra.labels);
      }
      if (pair.rightFile.extra) {
        labelUnique.add(pair.rightFile.extra.labels);
      }
    }

    // Get submissions with labels
    const labelsWithSubmissionsCount = [];

    for (const label of labelUnique) {
      if (label === undefined) continue;
      const submissions = newFiles.filter(
        (file) => file.extra && file.extra.labels === label
      ).length;
      labelsWithSubmissionsCount.push({
        label: label,
        submissions: submissions,
      });
    }

    const maxHighSimilarity = Math.max(
      ...newPairs.map((pair) => pair.highestSimilarity)
    );

    const averageHighSimilarity = newPairs.reduce(
      (acc, pair) => acc + pair.highestSimilarity,
      0
    )
      ? newPairs.reduce((acc, pair) => acc + pair.highestSimilarity, 0) /
        newPairs.length
      : 0;

    const medianHighSimilarity = newPairs.sort(
      (a, b) => a.highestSimilarity - b.highestSimilarity
    )[Math.floor(newPairs.length / 2)].highestSimilarity;

    // Calculate the highest similarity for each file based on the pairs
    for (const pair of newPairs) {
      const leftFile = newFiles.find((file) => file.id === pair.leftFile.id);
      const rightFile = newFiles.find((file) => file.id === pair.rightFile.id);

      if (leftFile && leftFile.highestSimilarity < pair.highestSimilarity) {
        leftFile.highestSimilarity = pair.highestSimilarity;
      }

      if (rightFile && rightFile.highestSimilarity < pair.highestSimilarity) {
        rightFile.highestSimilarity = pair.highestSimilarity;
      }
    }

    // Sort newPairs by highest similarity
    newPairs.sort((a, b) => b.highestSimilarity - a.highestSimilarity);

    const resultTemplate = {
      language: {
        name: reportResult.language?.name,
        extensions: reportResult.language?.extensions,
      },
      files: newFiles,
      pairs: newPairs,
      maxHighSimilarity: maxHighSimilarity,
      averageHighSimilarity: averageHighSimilarity,
      medianHighSimilarity: medianHighSimilarity,
      labels: labelsWithSubmissionsCount,
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
