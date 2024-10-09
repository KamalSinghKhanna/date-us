const express = require("express");

const app = express();

app.use("/user", [
  (req, res, next) => {
    console.log("result");

    // res.send("router handler 1")
    next();
  },
  (req, res, next) => {
    console.log("result2");
    // res.send("router handler 2");
    next();
  },
  (req, res, next) => {
    console.log("result3");
    res.send("router handler 3");
    next();
  },
]);

app.listen(3000, () => {
  console.log("server listining");
});
