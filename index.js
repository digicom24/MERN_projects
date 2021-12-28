const console = require("console");
const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, "localhost", function () {
  console.log("listening on port 3000");
});
