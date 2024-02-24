const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

var cors = require("cors");

app.use(cors());
app.use(express.json());

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

app.get("/addHistory", async (req, res) => {
  await client.connect();
  const database = client.db("ytconverteurdb");
  const collection = database.collection("users");

  const { credential, url, img, videoname } = req.query;

  const existingDocument = await collection.findOne({ credential: credential });

  if (existingDocument) {
    // Update the existing document with the new history entry
    const historyObject = {
      url: url || "None",
      img: img || "",
      videoname: videoname || "None",
    };

    await collection.updateOne(
      { credential: credential },
      { $push: { history: historyObject } }
    );
    res.json(existingDocument);
  } else {
    res.json({ "not done": "added" });
  }
});

app.get("/adduser", async (req, res) => {
  await client.connect();

  const { credential } = req.query;

  const data = await client.db("ytconverteurdb").collection("users");

  const user = await data.findOne({ credential: credential });

  if (!user) {
    await data.insertOne({
      credential: credential,
      history: [],
    });
    res.json({ done: "user added" });
  } else {
    res.json({ "no done": "Failed to add" });
  }
});

app.get("/gethistory", async (req, res) => {
  await client.connect();
  const collections = await client.db("ytconverteurdb").collection("users");

  const { credential } = req.query;
  const existinguser = await collections.findOne({ credential: credential });
  if (existinguser) res.json(existinguser);
  else res.json({ Error: "Not found." });
});

app.post("/register", async (req, res) => {
  try {
    const { nm, eml, ps } = req.body;

    const data = await client.db("ytconverteurdb").collection("user");
    if (!nm) return res.json({ error: "Name is required" });
    if (!eml) return res.json({ error: "Email is required" });
    if (!ps) return res.json({ error: "Ps is required" });

    const emailExist = await data.findOne({ email: eml });

    if (emailExist) {
      return res.json({ error: "Email already exists" });
    }

    await data.insertOne({
      name: nm,
      email: eml,
      password: ps,
      downloadlimit: {
        object: {
          date: new Date(),
          num: 0,
        },
      },
    });
    res.json({ operation: "done successfully", newregister: true });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
const PORT = 3000;

app.get("/api", (req, res) => {
  res.json({ czidhv: "cdsdv" });
});
app.listen(PORT, () => {
  console.log("done");
});
