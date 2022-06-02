import express from "express";
import router from "./endpoints/template/route.js";

const app = express();

// settings middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); //prettier-ignore

// roures
app.use("/template", router);

export default app;
