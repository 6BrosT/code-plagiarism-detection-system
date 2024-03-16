import { Dolos } from '@dodona/dolos-lib';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const createReportController = async (req: any) => {
  const generatePlagiarismDetectionUUID = uuidv4();

  try {
    // create a directory to save the code submissions
    if (!fs.existsSync('code_submission_save_files')) {
      fs.mkdirSync('code_submission_save_files');
    }
    if (
      !fs.existsSync(
        `./code_submission_save_files/${generatePlagiarismDetectionUUID}`,
      )
    ) {
      fs.mkdirSync(
        `./code_submission_save_files/${generatePlagiarismDetectionUUID}`,
      );
    }

    const codeSubmissions = req.body.code_submissions;
    const infoCsvContent = ['filename,student_id,question_id,created_at'];
    // save the code submissions to a file
    for (const submission of codeSubmissions) {
      const createdAt = new Date(submission.created_at).getTime();
      // convert created_at to a millisecond timestamp. 2023-07-23 17:12:33 +0200 -> 1679692353000
      const filename = `${submission.student_id}-${submission.question_id}-${createdAt}${submission.extension}`;
      fs.writeFileSync(
        `./code_submission_save_files/${generatePlagiarismDetectionUUID}/${filename}`,
        submission.code_content,
      );
      infoCsvContent.push(
        `${filename},${submission.student_id},${submission.question_id},${submission.created_at}`,
      );
    }
    const infoCsvPath = `./code_submission_save_files/${generatePlagiarismDetectionUUID}/info.csv`;
    fs.writeFileSync(infoCsvPath, infoCsvContent.join('\n'));

    // const testPath = './samples/javascript/info.csv';

    const dolos = new Dolos();
    const reportResult = await dolos.analyzePaths([
      // if you want to test the code in samples, uncomment the line below and comment the line above
      // testPath,
      infoCsvPath,
    ]);

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
        buildFragments: <any>[],
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
        labelUnique.add(pair.leftFile.extra.labels );
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
        (file) => (file.extra  && file.extra.labels === label),
      ).length;
      labelsWithSubmissionsCount.push({
        label: label,
        submissions: submissions,
      });
    }

    const maxHighSimilarity = Math.max(
      ...newPairs.map((pair) => pair.highestSimilarity),
    );

    const averageHighSimilarity = newPairs.reduce(
      (acc, pair) => acc + pair.highestSimilarity,
      0,
    )
      ? newPairs.reduce((acc, pair) => acc + pair.highestSimilarity, 0) /
        newPairs.length
      : 0;

    const medianHighSimilarity = newPairs.sort(
      (a, b) => a.highestSimilarity - b.highestSimilarity,
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
      status: 'success',
      data: resultTemplate,
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      status: 'error',
      message: error.message,
    };
  }
};

export default createReportController;
