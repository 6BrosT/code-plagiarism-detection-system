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
          query += `WHERE dolos_report.compared_code_question_ids LIKE '%${comparedCodeQuestionIds[i]}%' `;
        } else {
          query += `AND dolos_report.compared_code_question_ids LIKE '%${comparedCodeQuestionIds[i]}%' `;
        }
      }

      query += `LIMIT 1`;

      const { rows } = await db.raw(query);
      if (!rows[0]) {
        return null;
      }
      return rows[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default dolosReportModel;
