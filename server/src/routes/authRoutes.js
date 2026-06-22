import express from "express";
import { registerUser, loginUser, getProfile, getAllUsers } from "../controllers/authcontroller.js";
import { protect } from "../middleware/authMiddleware.js"
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/admin/users", protect, authorize("admin"), getAllUsers);

export default router;