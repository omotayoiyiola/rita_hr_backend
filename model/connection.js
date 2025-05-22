require("dotenv").config();

const mongoose = require("mongoose");
const db_url = process.env.DB_URL;

const connect = function () {
  mongoose
    .connect(db_url)
    .then((val) => {
      console.log("Mongo Database connected successfully");
    })
    .catch((err) => {
      console.log(`Error connecting MongoDB: ${err} `);
    });
};

module.exports = connect;
