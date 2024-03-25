import knex from "knex";

const host = process.env.DB_HOST || "127.0.0.1";
const port = process.env.DB_PORT || 8889;
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASSWORD || "root";
const database = process.env.DB_DATABASE_NAME || "dolos_demo";

const connectionString =
  process.env.DB_CONNECTION_STRING ||
  "postgresql://dolos_demo_owner:7eb1tdYEoQVS@ep-red-hall-a5zmmv4w-pooler.us-east-2.aws.neon.tech/dolos_demo?sslmode=require";

const client = process.env.DB_CLIENT || "pg";
const connection =
  client === "pg" && process.env.NODE_ENV === "production"
    ? {
        connectionString,
      }
    : {
        host,
        port,
        user,
        password,
        database,
      };

console.log("DB Connection", connection);

export default knex({
  client,
  connection,
  pool: { min: 0, max: 10 },
});
