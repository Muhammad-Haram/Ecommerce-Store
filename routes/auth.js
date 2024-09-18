import express from "express";
import { signUp } from "../controllers/auth.controller.js";
import CryptoJS from "crypto-js";
const router = express.Router();

router.route("/register").post(signUp);

export default router;
