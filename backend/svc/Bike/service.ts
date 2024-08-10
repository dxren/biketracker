import prismaClient from "../../prisma/client";
import type { IBikeService } from "./interface";

const BikeService = (): IBikeService => ({
  createBikeRide: async (params) => {
    const newBikeRide = await prismaClient.bikeRide.create({
      data: {
        userId: params.userId,
        distanceInMiles: params.distance,
        durationInMinutes: params.duration,
      },
    });

    return {
      ...newBikeRide,
      distance: newBikeRide.distanceInMiles,
      duration: newBikeRide.durationInMinutes,
    };
  },
  getAllBikeRides: async () => {
    const bikeRides = await prismaClient.bikeRide.findMany();
    return bikeRides.map((ride) => ({
      ...ride,
      distance: ride.distanceInMiles,
      duration: ride.durationInMinutes,
    }));
  },
  getRidesByUserId: async (userId: string) => {
    const bikeRides = await prismaClient.bikeRide.findMany({
      where: {
        userId,
      },
    });
    return bikeRides.map((ride) => ({
      ...ride,
      distance: ride.distanceInMiles,
      duration: ride.durationInMinutes,
    }));
  },
  updateBikeRide: async (rideId, params) => {
    const updatedBikeRide = await prismaClient.bikeRide.update({
      where: {
        id: rideId,
      },
      data: {
        distanceInMiles: params.distance,
        durationInMinutes: params.duration,
        notes: params.notes,
      },
    });
    return {
      ...updatedBikeRide,
      distance: updatedBikeRide.distanceInMiles,
      duration: updatedBikeRide.durationInMinutes,
    };
  },
});

export default BikeService;
