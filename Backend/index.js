import express from "express";
import requestRouter from "./Routes/requestRouter.js";
import deliveryRouter from "./Routes/deliveryRouter.js";
import infoRouter from "./Routes/infoRouter.js";
import logger from "./Middlewares/logger.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(logger);

app.use("/api/request", requestRouter);
app.use("/api/delivery", deliveryRouter);
app.use("/api/info", infoRouter);

app.listen(PORT, "127.0.0.1", console.log("server running on PORT: ", PORT));
