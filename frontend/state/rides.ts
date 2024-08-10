import BikeService from "../services/BikeService";
import useStore from "./store";
import { useEffect } from "react";
import useUser from "./user";

type RideInput = {
  distance?: number;
  duration?: number;
  notes?: string;
};

const useRides = () => {
  const { rides, setRides, user } = useStore();
  useUser()


  // fetch all the rides for the user, if changes, refetch
  useEffect(() => {
    if (!user) return;
    const fetchRides = async () => {
      const rides = await BikeService().getRidesByUserId(user.id);
      setRides(rides.data.bikeRides);
    };
    fetchRides();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // create a ride
  const createRide = async (ride: RideInput) => {
    // @TODO: add error handling
    if (!user) return;

    // make a network request
    const newRide = await BikeService().createBikeRide(user.id, ride);

    // update the state
    setRides([...rides, newRide.data]);
  };

  // update a ride
  const updateRide = async (rideId: string, ride: RideInput) => {
    // @TODO: add error handling
    if (!user) return;

    // Make a network request
    const updatedRide = await BikeService().updateBikeRide(rideId, ride);

    // Update the state
    setRides(rides.map((ride) => ride.id === rideId ? updatedRide.data.bikeRide : ride));
  };

  return { rides, createRide, updateRide };
};

export default useRides;