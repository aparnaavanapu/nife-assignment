import {signup,login} from "../controllers/auth.controllers.js";
import express from "express"



const AuthRouter = express.Router()
AuthRouter.post("/signup", signup)
AuthRouter.post("/login",login)


export default AuthRouter