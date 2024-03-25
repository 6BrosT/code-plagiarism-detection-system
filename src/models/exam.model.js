import db from "../utils/db.js";

const examModel = {
  findAll: async (filterAttributes) => {
    try {
      const result = await db("exam")
        .join("course", "exam.course_id", "course.id")
        .select("exam.*", "course.name as course_name")
        .where(filterAttributes);
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default examModel;
