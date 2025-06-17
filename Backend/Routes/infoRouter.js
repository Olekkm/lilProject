import express from "express";
import infoController from "../Controllers/infoController.js";

const infoRouter = express.Router();

infoRouter.get("/cities", infoController.getCities);
infoRouter.get("/sizes", infoController.getSizes);

export default infoRouter;
