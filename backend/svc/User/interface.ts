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
  getUserById(id: string): Promise<User | null>;
}
