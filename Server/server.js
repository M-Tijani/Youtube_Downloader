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

app.get("/api", async (req, res) => {
  try {
    const headerData = await getdata();
    res.json({ header: headerData });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { nm, eml, ps } = req.body;

    const data = await client.db('ytconverteurdb')
      .collection('user');
    if (!nm) return res.json({ "error": "Name is required" });
    if (!eml) return res.json({ "error": "Email is required" });
    if (!ps) return res.json({ "error": "Ps is required" });

    const emailExist = await data.findOne({email : eml}) ;

    if (emailExist) {
      return res.json({ "error": "Email already exists" });
    }

    await data.insertOne({
      name: nm,
      email: eml,
      password: ps,
      downloadlimit: {
        object: {
          date: new Date(),
          num: 0
        }
      }
    });
    res.json({ "operation": "done successfully" ,'newregister' :true })
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log("done");
});
