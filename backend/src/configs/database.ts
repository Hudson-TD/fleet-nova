import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";

// Allow access to env variables
config();

const mongoUser = process.env.MONGO_USERNAME;
const mongoSecret = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mongoUser}:${mongoSecret}@cluster0.dwfknpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function databaseStartup() {
  try {
    // Connect the client
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
