import express from "express";
import { getTemplate } from "./controller";

const router = express.Router();

router.route("/").get(getTemplate);

export default router;
