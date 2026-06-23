import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
    // console.log(req.body);
    try {
        const { name, email, password } = req.body;

        // validation 
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Cheking existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation 
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );
        
        if (!isMatch) {
            return res.status(401).json({
                message: "Invaild credentials"
            });
        }

        // Generate token 
        const token = generateToken(user._id);

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getProfile = async (req, res) => {
    res.status(200).json(req.user);
}

export const getAllUsers = async (req, res) => {
    const users = await User.find().select("-password");
    res.status(200).json(users);
}

export const chnagePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.user._id);

        const isMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isMatch) {
            res.status(401)
            throw new Error("Current password is incorrect");
            

        }

        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        )

        user.password = hashedPassword;

        await user.save();

        res.status(200).json({
            message: "Password updated successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { name , email } = req.body;

        const user = await User.findById(req.user._id);

        if (!user) {
            res.status(404)
            throw new Error("User not found");
        }

        // Check if email is already used by another user
        if (email && email !== user.email) {

            const emailExists = await User.findOne({ email });
            if (emailExists) {
                res.status(400)
                    throw new Error("Email already in use");
                }
            }
        }

        // Update feilds only if provided
        user.name = name || user.name;
        user.email = email || user.email;
        
        await user.save();

        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}