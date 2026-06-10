import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("DataBase Connected")
    } catch (error) {
        console.error("DataBase Error not Connected");
        console.error(error.message);

        process.exit(1);
    }
}

export default connectDB;