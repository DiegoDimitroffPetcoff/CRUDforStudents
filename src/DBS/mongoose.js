const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DBS MONGO CONNECTED"))
    .catch((err) => {
      console.log("error in DBS");
      console.log(err);
    });
}

module.exports = main;
