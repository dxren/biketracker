interface CreateBikeRideParams {
  userId: string;
  distance: number;
  duration: number;
}

interface BikeRide {
  id: string;
  userId: string;
  distance: number;
  duration: number;
  loggedAt: Date;
}

interface UpdateBikeRideParams {
  distance?: number;
  duration?: number;
  notes?: string;
}

export interface IBikeService {
  createBikeRide(params: CreateBikeRideParams): Promise<BikeRide>;
  getAllBikeRides(): Promise<BikeRide[]>;
  getRidesByUserId(userId: string): Promise<BikeRide[]>;
  updateBikeRide(rideId: string, params: UpdateBikeRideParams): Promise<BikeRide>;
}
