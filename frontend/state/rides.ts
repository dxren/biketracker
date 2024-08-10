import BikeService from "../services/BikeService";
import useStore from "./store";
import { useEffect } from "react";
import useUser from "./user";

type RideInput = {
  distance: number;
  duration: number;
  notes?: string;
};

const useRides = () => {
  const { rides, setRides, user } = useStore();
  useUser()

  useEffect(() => {
    if (!user) return;
    const fetchRides = async () => {
      const rides = await BikeService().getRidesByUserId(user.id);
      setRides(rides.data.bikeRides);
    };
    fetchRides();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.username]);

  const createRide = async (ride: RideInput) => {
    // @TODO: add error handling
    if (!user) return;

    const newRide = await BikeService().createBikeRide(user.id, ride);

    setRides([...rides, newRide.data]);
  };

  return { rides, createRide };
};

export default useRides;