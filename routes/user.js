import express from "express";
import { User } from "../models/user.model.js";
const router = express.Router();
import CryptoJS from "crypto-js";
import { verifyTokenAndAuth } from "../middleware/isVerify.js";
import { updateUser } from "../controllers/user.controller.js";

router.route("/:id").put(verifyTokenAndAuth, updateUser);

export default router;
