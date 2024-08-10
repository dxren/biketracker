import { create } from "zustand";
import { BikeRide } from "../services/BikeService";
import { User } from "../services/UserService";

type StoreState = {
  rides: BikeRide[];
  user: User | null;
  setRides: (rides: BikeRide[]) => void;
  setUser: (user: User) => void;
};

const useStore = create<StoreState>((set) => ({
  user: null,
  rides: [],
  setRides: (rides: BikeRide[]) => set({ rides }),
  setUser: (user: User) => set({ user }),
}));

export default useStore;