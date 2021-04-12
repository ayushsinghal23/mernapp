require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://user2308:ayushsinghal@mera-mern-stack.1bvs0.mongodb.net/shopdb?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
      console.log(error)
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;