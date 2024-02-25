const { ObjectId , MongoClient } = require("mongodb");
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

  const { credential,email, url, img, videoname } = req.query;

  if (!credential || !email || !url || !img || !videoname) {
    res.status(400).json({ error: 'Missing required parameters' });
    return; // Return to exit the function and prevent further execution
  }

    const existingDocument = await collection.findOne({ email: email });

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

  const { credential ,email} = req.query;

  const data = client.db("ytconverteurdb").collection("users");

  const user = await data.findOne({ email: email });

  if (!user) {
    const customId = new ObjectId();
    await data.insertOne({
      _id:customId,
      credential: credential,
      email:email,
      history: [],
    });
   res.json({ '_id': customId });
  } else {
    res.json({ "Error": "Failed to add" });
  }
 
});

app.get("/gethistory",async (req, res) => {
   client.connect();
  const collections = await client.db("ytconverteurdb").collection("users");

  const { email } = req.query;
  if(email){
    const existinguser =  await collections.findOne({ email: email });
    if (existinguser) res.json(existinguser);
    else res.json({ "Error": "Not found." });
  }else{
    res.json({ "Error": "Missing attribute" });
  }
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
const PORT = 3200;

app.get("/test", (req, res) => {
  res.json({ czidhv: "cdsdv" });
});
app.listen(PORT, () => {
  console.log("done");
});
