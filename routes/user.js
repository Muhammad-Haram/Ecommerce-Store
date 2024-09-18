import express from "express";
import { userpost, usertest } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/usertest").get(usertest);
router.route("/userpost").post(userpost);

export default router;
