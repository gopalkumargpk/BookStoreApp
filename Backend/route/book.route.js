import express from "express";
import { getBook } from "../controller/book.controller.js"; // added .js extension

const router = express.Router();

router.get("/", getBook);

export default router; // Export the router for use in your main app file
