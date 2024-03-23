const dolosReportSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: { type: "string", maxLength: 255 },
    programming_language_name: { type: "string" },
    programming_language_extensions: { type: "string" },
    compared_code_question_ids: { type: "string" },
    pairs_json_content: { type: "string" },
    user_id: {
      type: "string",
    },
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

export default dolosReportSchema;
