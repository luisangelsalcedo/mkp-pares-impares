const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { count: "50" });
});

app.listen("3000", () => {
  console.log("server run");
});
