const console = require("console");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected!!");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/makecampground", async (req, res) => {
  const camp = new Campground({
    title: "my backyard",
    description: "cheap camping",
  });
  await camp.save();
  res.send(camp);
});

app.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
