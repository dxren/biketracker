import { z } from "zod";

export const CreateBikeRideParamsSchema = z.object({
  userId: z.string(),
  distance: z.number(),
  duration: z.number(),
  notes: z.string().optional(),
});

export const GetBikeRidesByUserIdParamsSchema = z.object({
  userId: z.string(),
});

export type CreateBikeRideParams = z.infer<typeof CreateBikeRideParamsSchema>;
