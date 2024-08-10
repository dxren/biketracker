import api from "../network/api";

export type User = {
  id: string;
  username: string;
  email: string;
};

type Response<T> = Promise<{ data: T; error: string }>;

const UserService = () => ({
  createUser: (user: User): Response<User> => api.post("/user", user),
  getUserByUsername: (username: string): Response<User> =>
    api.get(`/user/${username}`),
});

export default UserService;
