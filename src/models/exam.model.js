import generate from "./generic.model.js";
import db from "../utils/db.js";

const genericExamModel = generate("exam", "id");

const examModel = {
  ...genericExamModel,

  findAllByOrgId: async (orgId) => {
    try {
      const result = await db("exam").where("org_id", orgId);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default examModel;
