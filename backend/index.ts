import cookieParser from "cookie-parser";
import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import type { Workout } from "./types";
import userRouter from "./controllers/user";
import bikeRouter from "./controllers/bike";
import cors from "cors";

const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/bike", bikeRouter);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
