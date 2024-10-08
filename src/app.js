const express = require("express");

const app = express();

// app.use(express.json());

app.use("/", (req, res, next) => {
    next()
  res.send("Hi from dash");

});
app.use("/test", (req, res) => {
  res.send("Hi from express");
});
app.use("/kamal", (req, res) => {
  res.send("Hi from kamal");
});
app.listen(3000, () => {
  console.log("server listining");
});
