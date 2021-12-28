const console = require("console");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    keepAlive: true,
  })
  .then(() => {
    console.log("db Connection open!!!");
  })
  .catch((err) => {
    console.log("Error while connecting to db");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dogs", (req, res) => {
  res.send("loloololo");
});

app.get("", (req, res) => {
  res.send("3000 loloololo");
});

app.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
