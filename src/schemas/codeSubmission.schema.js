const codeSubmissionSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    code_question_id: { type: "string" },
    programming_language_name: { type: "string" },
    user_id: { type: "string" },
    source_code: { type: "string" },
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

export default codeSubmissionSchema;
