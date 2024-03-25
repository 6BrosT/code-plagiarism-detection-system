import generate from "./generic.model.js";
import db from "../utils/db.js";

const genericCodeSubmissionModel = generate("code_submission", "id");

const codeSubmissionModel = {
  ...genericCodeSubmissionModel,

  findAll: async (filterAttributes) => {
    try {
      const result = await db("code_submission")
        .join(
          "code_question",
          "code_question.id",
          "code_submission.code_question_id"
        )
        .join("user", "user.id", "code_submission.user_id")
        .select(
          "code_submission.id",
          "code_submission.code_question_id",
          "code_question.title as code_question_title",
          "code_submission.programming_language_name",
          "code_submission.source_code",
          "code_submission.user_id",
          "user.name as user_fullname",
          "user.org_user_id as org_user_id",
          "code_submission.created_at",
          "code_submission.updated_at"
        )
        .where(filterAttributes);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default codeSubmissionModel;
