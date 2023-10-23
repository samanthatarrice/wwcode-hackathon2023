const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");


// Mongoose connect:
main().catch((err) =>
  console.log("There was an error connecting to Mongo:", err)
);

async function main() {
  // * Removed useCreateIndex and useFindAndModify bc it wasn't supported
  await mongoose.connect("mongodb://localhost:27017/lavender", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongo connection open!");
}

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
// Serve static files from the "public" directory
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
  res.render("home");
});

// Goals routes:
app.get("/goals/mindful", (req, res) => {
  res.render("goals/mindful");
});
app.get("/goals/inspired", (req, res) => {
  res.render("goals/inspired");
});
app.get("/goals/destress", (req, res) => {
  res.render("goals/destress");
});
app.get("/goals/calm", (req, res) => {
  res.render("goals/calm");
});
app.get("/goals/motivated", (req, res) => {
  res.render("goals/motivated");
});
app.get("/goals/grounded", (req, res) => {
  res.render("goals/grounded");
});

// Emotions routes:
app.get("/emotions/angry", (req, res) => {
  res.render("emotions/angry");
});
app.get("/emotions/anxious", (req, res) => {
  res.render("emotions/anxious");
});
app.get("/emotions/happy", (req, res) => {
  res.render("emotions/happy");
});
app.get("/emotions/silly", (req, res) => {
  res.render("emotions/silly");
});
app.get("/emotions/sad", (req, res) => {
  res.render("emotions/sad");
});


app.listen(3000, () => {
  console.log("Serving Lavender on port 3000");
});
