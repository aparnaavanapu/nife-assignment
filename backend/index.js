import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth.routes.js";
const app = express();

app.use(express.json());
app.use(cors()); 
app.use("/auth",AuthRouter)



app.listen(5005, () => {
    console.log("🚀 Server running at http://localhost:5005/");
});