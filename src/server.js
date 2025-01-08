const process = require("node:process");

const bcrypt = require("bcrypt");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const express = require("express");
const app = express();

const port = 5001;

const myPassword = "password1234";
const saltRounds = 10;

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.post("/signup", async (req, res) => {
  try {
    // connect the client to the server
    await client.connect();

    const db = client.db("users_database");
    const usersCollection = db.collection("users");

    const salt = bcrypt.genSaltSync(saltRounds);
    console.log(`salt: ${salt}`); /* eslint-disable-line no-console */
    const passwordHash = bcrypt.hashSync(myPassword, salt);

    const result = await usersCollection.insertOne({
      "first-name": "Alexey",
      "last-name": "Yevtushenko",
      email: "isnastish@gmail.com",
      password: passwordHash,
    });

    /* eslint-disable-next-line no-console */
    console.log(`added document with ID: ${result.insertedId}`);
  } catch (err) {
    res.status(500).send(err);
    return;
  } finally {
    await client.close();
  }

  res.send("Ok");
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on port: ${port}`);
});
