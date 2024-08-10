import axios from "axios";

export const EP = {
  user: {
    createUser: "/user",
    getUserByUsername: (username: string) => `/user/${username}`
  },
  bike: {
    createBikeRide: "/bike/ride",
    getAllBikeRides: "/bike/rides",
    getRidesByUserId: (userId: string) => `/bike/rides/${userId}`
  }
};

const BASE_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default api;