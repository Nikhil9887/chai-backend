// require("dotenv").config({ path: "./env" });
// make env variables available
// as soon as possible
// but we were using import statements to get something in our file
// but here, we are using require
// the code will still run but we are not being consistent

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

// connectDB() is asynchronous method so it returns a promise
// and so we can use .then().catch()
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection failed !! ", err);
  });

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("ERROR", (error) => {
//       console.error("err : ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
