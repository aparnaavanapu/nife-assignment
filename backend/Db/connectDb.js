import { Client } from 'pg';

import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.POSTGRES_CONNECTION_URL;

const db = new Client({
  connectionString: connectionString,
});

db.connect(err => {
  if (err) {
    console.log("Postgres connection error:", err.message);
    process.exit(1);
  }
  console.log("Postgres Connected.....");
});

export default db;
