const mongoose = require("mongoose");
module.exports = () =>
  mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`Database connection is successfully`.red.bold);
  });
