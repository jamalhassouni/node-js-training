const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var urlencodeParser = bodyParser.urlencoded({ extended: false });

// template engine ejs
app.set("view engine", "ejs");

// Middleware
app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodeParser, function(req, res) {
  console.log(req.body);
  res.render("contactSuccess", { data: req.body });
});

app.get("/profile/:name", function(req, res) {
  let data = {
    age: 23,
    job: "web developer",
    hobbies: ["eating", "fighting", "fishing"]
  };
  res.render("profile", { person: req.params.name, data: data });
});
app.listen(3000);
