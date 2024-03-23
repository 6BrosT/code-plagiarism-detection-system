import generate from "./generic.model.js";
import db from "../utils/db.js";

const genericDolosReportModel = generate("dolos_report", "id");

const dolosReportModel = {
  ...genericDolosReportModel,

  upsert: async (data) => {
    try {
      const result = await db("dolos_report")
        .insert(data)
        .onConflict("id")
        .merge();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  findFirstByComparedCodeQuestionIds: async (comparedCodeQuestionIds) => {
    try {
      let query = `SELECT * FROM dolos_report `;

      for (let i = 0; i < comparedCodeQuestionIds.length; i++) {
        if (i === 0) {
          query += `WHERE compared_code_question_ids LIKE '%${comparedCodeQuestionIds[i]}%' `;
        } else {
          query += `AND compared_code_question_ids LIKE '%${comparedCodeQuestionIds[i]}%' `;
        }
      }

      query += `LIMIT 1`;

      const result = await db.raw(query);
      if (!result[0] || result[0].length === 0) {
        return null;
      }
      return result[0][0];
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default dolosReportModel;
