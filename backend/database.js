import mongoose from "mongoose";
import { config } from "./src/config.js";

mongoose.connect(config.MONGO_URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is connected");
})

connection.on("disconnected", () => {
    console.log("DB is disconnected");
})

connection.once("error", () => {
    console.log("Error found" + error);
})