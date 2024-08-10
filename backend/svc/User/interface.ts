interface CreateUserParams {
  email: string;
  username: string;
}

interface User {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
}

export interface IUserService {
  createUser(params: CreateUserParams): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserByUsername(username: string): Promise<User | null>;
}
