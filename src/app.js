const express = require("express");
const { authAdmin, authUser } = require("../middleware/auth");

const app = express();
// app.use("/admin", authAdmin);
app.get("/admin/getAllData", authAdmin, (req, res) => {
  //logic if the req is authorized or validate token

  res.send("all data sent");
});
app.delete("/admin/deleteUser", (req, res) => {
  res.end("delete user");
});
app.get("/user", authUser ,(req, res) => {
  res.end("delete user");
});

app.listen(3000, () => {
  console.log("server listining");
});
