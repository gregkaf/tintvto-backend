import express from "express";
import { getAll } from "./controller.js";

const router = express.Router();

router.route("/").get(getAll);

export default router;
