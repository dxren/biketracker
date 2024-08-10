import { z } from "zod";

export const CreateUser = z.object({
  email: z.string().email(),
  username: z.string().min(1),
});

export type CreateUser = z.infer<typeof CreateUser>;

export const GetUser = z.object({
  username: z.string().min(1),
});

export type GetUser = z.infer<typeof GetUser>;