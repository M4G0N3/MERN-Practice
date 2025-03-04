import express from "express";

const expressRouter = express.Router();

expressRouter.get("/", (req, res) => {
   res.send("Welcome to Memento!");
});
export default expressRouter;