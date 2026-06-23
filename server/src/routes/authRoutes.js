import express from "express";
import { registerUser, loginUser, getProfile, getAllUsers, chnagePassword, updateUser } from "../controllers/authcontroller.js";
import { protect } from "../middleware/authMiddleware.js"
import { authorize } from "../middleware/roleMiddleware.js";
import { body } from "express-validator";
import { validate } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", 
    [
        body("name")
        .notEmpty()
        .withMessage("Name is required"),

        body("email")
        .notEmpty()
        .isEmail()
        .withMessage("please provide valid email"),

        body("password")
        .isLength({ min: 6})
        .withMessage("Password must be at least 6 characters")
    ], validate, registerUser);
    
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/admin/users", protect, authorize("admin"), getAllUsers);
router.put("/change-password", protect, chnagePassword);
router.put("/update", protect, updateUser)  

export default router;