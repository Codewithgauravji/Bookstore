import express from "express";
import { getbook } from "../Controler/Book.controler.js";

const router = express.Router();

router.get("/", getbook);

export default router;