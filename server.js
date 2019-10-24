const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index.js");

require("dotenv").config();

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
  process.env.MONGODB_URI || "mongodb://localhost/mongoNews",
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("mongoose connection is successful");
    }
  }
);

app.use(routes);
app.get("/", function(req, res) {
  res.send("Welcome to Scraping News");
});

app.listen(PORT, function() {
  console.log("listenning to the port ", PORT);
});
