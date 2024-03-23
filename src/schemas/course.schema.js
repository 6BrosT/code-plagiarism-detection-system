const courseSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    org_id: { type: "string" },
    name: { type: "string", maxLength: 255 },
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

export default courseSchema;
