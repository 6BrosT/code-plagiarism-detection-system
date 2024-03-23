const userSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
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

export default userSchema;
