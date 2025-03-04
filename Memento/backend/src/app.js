import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./database/data.js";
import  expressRouter  from "./routes/posts.router.js";

dotenv.config({ path: "./.env" });
const expressApp = express();

expressApp.use("/posts", expressRouter)

expressApp.use(express.json({limit: "30kb"}));
expressApp.use(express.urlencoded({ extended: true, limit: "30kb" }))

expressApp.use(cors())

expressApp.use(express.static("public"));

expressApp.use(cookieParser());

export {expressApp}