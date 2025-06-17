import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: "5454",
  database: "postgres",
});

export default db;
