import knex from "knex";

export default knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "dolos_demo",
  },
  pool: { min: 0, max: 10 },
});
