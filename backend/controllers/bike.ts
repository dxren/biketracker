import express from "express";
import BikeService from "../svc/Bike/service";
import {
  validateRequestBody,
  validateRequestParams,
} from "zod-express-middleware";
import {
  CreateBikeRideParamsSchema,
  GetBikeRidesByUserIdParamsSchema,
} from "./bike.types";
const bikeRouter = express.Router();

bikeRouter.post(
  "/ride",
  validateRequestBody(CreateBikeRideParamsSchema),
  async (req, res) => {
    try {
      const body = req.body;
      const bikeRide = await BikeService().createBikeRide(body);
      res.status(201).json({ bikeRide });
    } catch (error) {
      console.error("error creating bike ride: ", error);
      res.status(500).json({ error: "failed to create bike ride" });
    }
  }
);

bikeRouter.get(
  "/rides/:userId",
  validateRequestParams(GetBikeRidesByUserIdParamsSchema),
  async (req, res) => {
    try {
      const userId = req.params.userId;
      const bikeRides = await BikeService().getRidesByUserId(userId);
      res.status(200).json({ bikeRides });
    } catch (error) {
      console.error("error fetching bike rides: ", error);
      res.status(500).json({ error: "failed to fetch bike rides" });
    }
  }
);

export default bikeRouter;
