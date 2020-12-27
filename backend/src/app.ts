import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import postsRouter from "./core/adapters/primary/routes/posts";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/posts", postsRouter);

export default app;
