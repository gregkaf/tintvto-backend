import express from "express";
import skuRouter from "./endpoints/sku/route.js";
// import templateRouter from "./endpoints/template/route.js";

const app = express();

// settings middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true})); //prettier-ignore

// routes
// app.use("/template", templateRouter);
app.use("/sku", skuRouter);

export default app;
