import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if (!process.env.MONGODB_URI) {
        return console.log("No MongoDB URI provided");
    }

    if (isConnected) {
        return console.log("=> using existing database connection");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true;
        console.log("mongodb connected")
    } catch (error) {
        console.log(error);
    }


}