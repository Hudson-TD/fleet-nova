import app from "./app.js";
import { databaseStartup } from "./configs/database.js";

function init() {
  try {
    databaseStartup();
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}

init();
