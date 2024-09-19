import express from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuth } from "../middleware/isVerify.js";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/:id").put(verifyTokenAndAuth, updateUser);
router.route("/:id").delete(verifyTokenAndAuth, deleteUser);
router.route("/find/:id").delete(verifyTokenAndAdmin, getUser);

export default router;
