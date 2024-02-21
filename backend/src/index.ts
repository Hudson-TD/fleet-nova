import app from "./app.js";
import { connectToDatabase } from "./configs/database.js";

async function init() {
  try {
    connectToDatabase();
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}

init();
