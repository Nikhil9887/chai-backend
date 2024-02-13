import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// .use() is used for middlewares

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
// pehle we had to use body-parser
// lekin abhi express me ye feature already available rehta so no need of
// body-parser

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// lets say if i search "Nikhil Malusare" on a web-browser
// so kuch browsers usko ".....Nikhil+Malusare....." krte hai
// kuch usko ".....Nikhil%20Malusare....." krte haii
// space -> + or %20
// to isi ke saath deal krne ke liye express.urlencoded() ko use krte

app.use(express.static("public"));

app.use(cookieParser);

export { app };
