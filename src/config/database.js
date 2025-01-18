const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect("mongodb+srv://kamal:h0GhY8GwE0EjwNzY@cluster0.ovixz.mongodb.net/date-us");
};



module.exports = connectDb