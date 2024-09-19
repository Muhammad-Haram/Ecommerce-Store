import express from "express";
import { logIn, signUp } from "../controllers/auth.controller.js";
import CryptoJS from "crypto-js";
const router = express.Router();

router.route("/register").post(signUp);
router.route("/login").post(logIn);

export default router;
