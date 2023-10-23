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

app.get("/about", (req, res) => {
  res.render("about");
});




app.listen(3000, () => {
  console.log("Serving Lavender on port 3000");
});
