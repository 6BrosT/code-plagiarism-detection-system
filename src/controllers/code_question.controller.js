import codeQuestionModel from "../models/code_question.model.js";

const getAllCodeQuestionsByController = async (req) => {
  const filterAttributes = req.query;
  const codeQuestions = await codeQuestionModel.findAll(filterAttributes);

  return {
    statusCode: 200,
    status: "success",
    data: codeQuestions,
  };
};

export default { getAllCodeQuestionsByController };
