import cookieParser from "cookie-parser";
import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import type { Workout } from "./types";
const app = express();
const PORT = 3000;
const prisma = new PrismaClient();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/workout", async (req, res) => {
  console.log("postWorkout called");
  try {
    const body = req.body as Workout;
    const result = await prisma.workout.create({
      data: { ...body },
    });
    res.status(201).json(result);
  } catch (error) {
    console.error("error creating workout: ", error);
    res.status(500).json({ error: "failed to create workout" });
  }
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(
    `server is listening on port: ${PORT}`,
    `http://localhost:${PORT}`
  );
});
