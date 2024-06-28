const mongoose = require("mongoose");

mongoose
  .connect(process.env.dburl)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("connection unsuccessful", err);
  });
