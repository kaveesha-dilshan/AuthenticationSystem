import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import { errorHandler } from "./src/middleware/errorMiddleware.js";


dotenv.config();

const app = express();

// connect Database
connectDB();

// add middleware express
app.use(express.json());

app.use("/api/auth",authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is Running on port ${PORT}`);
});