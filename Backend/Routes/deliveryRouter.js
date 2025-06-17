import express from "express";
import deliveryController from "../Controllers/deliveryController.js";

const deliveryRouter = express.Router();

deliveryRouter.get("/", deliveryController.getIds);
deliveryRouter.get("/:deliveryId", deliveryController.getById);

export default deliveryRouter;
