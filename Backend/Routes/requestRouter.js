import express from "express";
import requestController from "../Controllers/requestController.js";

const requestRouter = express.Router();

requestRouter.get("/", requestController.getIds);
requestRouter.get("/:requestId", requestController.getById);
requestRouter.post("/", requestController.setRequest);

export default requestRouter;
