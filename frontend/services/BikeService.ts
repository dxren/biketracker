import api from "../network/api";

type BikeRideInput = {
  distance: number;
  duration: number;
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
  getAllBikeRides: (): Response<BikeRide[]> => api.get("/bike/rides"),
  getRidesByUserId: (userId: string): Response<BikeRide[]> =>
    api.get(`/bike/rides/${userId}`),
});

export default BikeService;
