import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth.routes.js";

const app = express();

// ✅ Allow all origins, methods, and headers explicitly
app.use(cors({
  origin: "*", // allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // all HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // all common headers
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Authentication API");
});

// Your routes
app.use("/auth", AuthRouter);

app.listen(5005, () => {
  console.log("🚀 Server running at http://localhost:5005/");
});
