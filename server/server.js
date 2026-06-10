import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();

const POST = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is Running on port ${PORT}`);
});