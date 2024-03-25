import db from "../utils/db.js";
import examModel from "./exam.model.js";
import generate from "./generic.model.js";

const genericCodeQuestionModel = generate("code_question", "id");

const codeQuestionModel = {
  ...genericCodeQuestionModel,

  findAll: async (filterAttributes) => {
    try {
      const exams = await examModel.findAll(filterAttributes);
      const examIds = exams.map((exam) => exam.id);
      const result = await db("code_question").whereIn("exam_id", examIds);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default codeQuestionModel;
