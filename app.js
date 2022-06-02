import express from "express";
import router from "./endpoints/template/route.js";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/template", router);

export default app;
