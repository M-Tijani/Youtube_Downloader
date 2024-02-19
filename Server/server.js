const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

const con =
  "mongodb+srv://ytconverteur:uzqzGJMfXWdo7YJM@ytconverteur.bheboia.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(con);

async function getdata() {
  await client.connect();
  const database = client.db("howtouse");
  const collection_header = database.collection("header");
  const header = await collection_header.find({}).toArray();
  return header;
}

app.get("/api", async (req, res) => {
  try {
    const headerData = await getdata();
    res.json({ header: headerData });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("done");
});
