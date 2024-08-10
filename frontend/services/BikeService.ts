import api from "../network/api";

type BikeRideInput = {
  distance?: number;
  duration?: number;
  notes?: string;
};

export interface BikeRide {
  id: string;
  userId: string;
  distance: number;
  duration: number;
  notes?: string;
  loggedAt: Date;
}

type Response<T> = Promise<{ data: T; error: string }>;

const BikeService = () => ({
  createBikeRide: (
    userId: string,
    bikeRide: BikeRideInput
  ): Response<BikeRide> => api.post("/bike/ride", { userId, ...bikeRide }),
  getAllBikeRides: (): Response<{ bikeRides: BikeRide[] }> =>
    api.get("/bike/rides"),
  getRidesByUserId: (userId: string): Response<{ bikeRides: BikeRide[] }> =>
    api.get(`/bike/rides/${userId}`),
  updateBikeRide: (rideId: string, ride: BikeRideInput): Response<{
    bikeRide: BikeRide;
  }> => api.put(`/bike/ride/${rideId}`, ride),
});

export default BikeService;
