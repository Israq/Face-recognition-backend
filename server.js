require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const setup = require("./controllers/setup");

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  pool: { min: 0, max: 2 },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("It is working");
});
app.post("/signin", signin.handleSignin(db, bcrypt));
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.get("/setup", setup.setupTables(db));
app.get("/add-entries", (req, res) => {
  db.raw("ALTER TABLE users ADD COLUMN IF NOT EXISTS entries INTEGER DEFAULT 0")
    .then(() => res.json("Column added"))
    .catch((err) => {
      console.log("Error:", err);
      res.status(400).json("Failed");
    });
});
app.get("/proxy-image", async (req, res) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const imageUrl = req.query.url;
    const response = await fetch(imageUrl);
    const buffer = await response.buffer();
    res.set("Content-Type", response.headers.get("content-type"));
    res.send(buffer);
  } catch (err) {
    res.status(400).json("Failed to fetch image");
  }
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
