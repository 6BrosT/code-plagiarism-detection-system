const examSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: { type: "string" },
    course_id: { type: "string" },
    user_id: { type: "string" },
    created_at: {
      type: "string",
      format: "date-time", // Using the custom format from dependency ajv-formats
    },
    updated_at: {
      type: "string",
      format: "date-time", // Using the custom format from dependency ajv-formats
    },
  },
};

export default examSchema;
