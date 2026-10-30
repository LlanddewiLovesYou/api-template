const mongoose = require("mongoose");

const User = require("./user");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
};

const models = { User };

module.exports = { connectDb, models };
