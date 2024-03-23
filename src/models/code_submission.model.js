import generate from "./generic.model.js";
import db from "../utils/db.js";

const genericCodeSubmissionModel = generate("code_submission", "id");

const codeSubmissionModel = {
  ...genericCodeSubmissionModel,

  findAllByCodeQuestionId: async (codeQuestionId) => {
    try {
      let query = `SELECT 
        code_submission.id, 
        code_submission.code_question_id,
        code_question.title as code_question_title,
        code_submission.programming_language_name,
        code_submission.source_code,
        code_submission.user_id,
        user.name as user_fullname,
        user.org_user_id as org_user_id,
        code_submission.created_at,
        code_submission.updated_at
      FROM code_submission 
      JOIN code_question ON code_question.id = code_submission.code_question_id
      JOIN user ON user.id = code_submission.user_id AND user.role = 2
      WHERE code_question_id = ?`;

      const result = await db.raw(query, [codeQuestionId]);
      if (!result[0]) {
        return null;
      }
      return result[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default codeSubmissionModel;
