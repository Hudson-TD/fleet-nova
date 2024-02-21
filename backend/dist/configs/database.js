import { config } from "dotenv";
// Allow access to env variables
config();
const mongoUser = process.env.MONGO_USERNAME;
const mongoSecret = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mongoUser}:${mongoSecret}@cluster0.dwfknpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
import { connect, disconnect } from "mongoose";
export async function connectToDatabase() {
    try {
        await connect(uri);
        console.log("DB connection successful");
    }
    catch (error) {
        console.log(error);
        throw new Error("Error connecting to MongoDB");
    }
}
export async function disconnectFromDatabase() {
    try {
        await disconnect();
        console.log("Disconnected from MongoDB");
    }
    catch (error) {
        console.log(error);
        throw new Error("Error disconnecting to MongoDB");
    }
}
//# sourceMappingURL=database.js.map