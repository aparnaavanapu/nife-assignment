import db from "../Db/connectDb.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({ error: "Please fill all the fields" });
  }

  if (password.length < 6) {
    return response.status(400).json({ error: "Password is too short" });
  }

  const checkUserQuery = "SELECT * FROM users WHERE email = $1";
  const createNewUser = "INSERT INTO users(name, email, password) VALUES ($1, $2, $3)";

  try {
    const checkResult = await db.query(checkUserQuery, [email]);

    if (checkResult.rows.length > 0) {
      return response.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(createNewUser, [name, email, hashedPassword]);

    return response.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Database error:", err);
    return response.status(500).json({ error: "Database error" });
  }
};

export const login = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({ error: "Please fill all the fields" });
  }

  const getUserQuery = "SELECT * FROM users WHERE email = $1";

  try {
    const result = await db.query(getUserQuery, [email]);

    if (result.rows.length === 0) {
      return response.status(400).json({ error: "Invalid User" });
    }

    // console.log("User found:", result.rows[0]);
    const dbUser = result.rows[0];
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password);

    if (isPasswordMatched) {
      const payload = { email: dbUser.email, user_id: dbUser.id };
      const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
      return response.status(200).json({ message: "Login successful", jwtToken });
    } else {
      return response.status(401).json({ error: "Invalid password" });
    }
  } catch (err) {
    console.error("Database error:", err);
    return response.status(500).json({ error: "Database error" });
  }
};
