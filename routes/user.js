import express from "express";
import { verifyToken } from "./verifyToken";
const router = express.Router();

router.route("/:id").put(verifyToken, () => {});

export default router;
