const codeQuestionSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    title: { type: "string" },
    exam_id: { type: "string" },
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

export default codeQuestionSchema;
