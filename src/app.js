const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  throw new Error("error");
  res.end("delete user");
});
app.use("/", (err, req, res, next) => {
  if (err) {
    console.log(err)
    res.status(500).send("something went wrong");
  }
});
app.listen(3000, () => {
  console.log("server listining");
});
