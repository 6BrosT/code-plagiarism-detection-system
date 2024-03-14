import express from "express";
import { Dolos } from "@dodona/dolos-lib";
import { writeFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const router = express.Router();

router.post("/", async function (req, res) {
  const generatePlagiarismDetectionUUID = uuidv4();

  try {
    // create a directory to save the code submissions
    if (
      !fs.existsSync(
        `./code_submission_files/${generatePlagiarismDetectionUUID}`
      )
    ) {
      fs.mkdirSync(
        `./code_submission_files/${generatePlagiarismDetectionUUID}`
      );
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error creating directory to save code submissions",
    });
  }

  try {
    const codeSubmissions = req.body.code_submissions;

    const infoCsvContent = ["filename,student_id,question_id,created_at"];
    // save the code submissions to a file
    for (const submission of codeSubmissions) {
      const createdAt = new Date(submission.created_at).getTime();
      // convert created_at to a millisecond timestamp. 2023-07-23 17:12:33 +0200 -> 1679692353000
      const filename = `${submission.student_id}-${submission.question_id}-${createdAt}${submission.extension}`;
      await writeFile(
        `./code_submission_files/${generatePlagiarismDetectionUUID}/${filename}`,
        submission.code_content
      );
      infoCsvContent.push(
        `${filename},${submission.student_id},${submission.question_id},${submission.created_at}`
      );
    }
    const infoCsvPath = `./code_submission_files/${generatePlagiarismDetectionUUID}/info.csv`;
    await writeFile(infoCsvPath, infoCsvContent.join("\n"));

    const testPath = "./samples/javascript/info.csv";

    const dolos = new Dolos();
    const reportResult = await dolos.analyzePaths([
      // if you want to test the code in samples, uncomment the line below and comment the line above
      // testPath,
      infoCsvPath,
    ]);

    // build fragments for each pair
    const newPairs = [];
    for (const pair of reportResult.allPairs()) {
      let newPair = {
        id: pair.id,
        leftFile: pair.leftFile,
        rightFile: pair.rightFile,
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

    const resultTemplate = {
      language: {
        name: reportResult.language.name,
        extensions: reportResult.language.extensions,
      },
      pairs: newPairs,
      createdAt: reportResult.createdAt,
      name: reportResult.name,
    };

    res.status(200).json({
      status: "success",
      data: resultTemplate,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error analyzing code submissions",
    });
  }
});

export default router;
