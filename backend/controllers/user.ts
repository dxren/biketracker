import express from "express";
import UserService from "../svc/User/service";
import { validateRequestBody, validateRequestParams } from "zod-express-middleware";
import { CreateUser, GetUser } from "./user.types";

const userRouter = express.Router();

userRouter.post("/", validateRequestBody(CreateUser), async (req, res) => {
  try {
    const body = req.body;
    const user = await UserService().createUser(body);
    res.status(201).json({user});
  } catch (error) {
    console.error("error creating user: ", error);
    res.status(500).json({ error: "failed to create user" });
  }
});

userRouter.get("/:username", validateRequestParams(GetUser), async (req, res) => {
  try {
    const username = req.params.username;
    const user = await UserService().getUserByUsername(username);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (error) {
    console.error("error fetching user: ", error);
    res.status(500).json({ error: "failed to fetch user" });
  }
});

export default userRouter;
