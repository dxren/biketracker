import prismaClient from "../../prisma/client";
import type { IUserService } from "./interface";

const UserService = (): IUserService => ({
  createUser: async (params: { email: string; username: string }) => {
    const newUser = await prismaClient.user.create({
      data: {
        email: params.email,
        username: params.username,
      },
    });

    return newUser;
  },
  getAllUsers: async () => {
    const users = await prismaClient.user.findMany();
    return users;
  },
  getUserById: async (id: string) => {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  },
});

export default UserService;
