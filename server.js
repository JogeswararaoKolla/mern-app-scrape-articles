const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ScrapeArticles"
);

app.get("/", function(req, res) {
  res.send("Welcome to Scraping News");
});

app.listen(PORT, function() {
  console.log("listenning to the port ", PORT);
});
