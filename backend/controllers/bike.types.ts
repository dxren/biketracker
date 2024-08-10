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

export const UpdateBikeRideBodySchema = z.object({
  distance: z.number().optional(),
  duration: z.number().optional(),
  notes: z.string().optional(),
});

export const UpdateBikeRideParamsSchema = z.object({
  rideId: z.string(),
});

export type CreateBikeRideParams = z.infer<typeof CreateBikeRideParamsSchema>;
