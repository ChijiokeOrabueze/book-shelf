import { z } from "zod";



export const createUserSchema = z.object({
    body: z.object({
        firstName: z.string({

        }).trim().max(200).min(2),
        lastName: z.string({
            required_error: "Full name is required",
        }).trim().max(200).min(2),
        email: z
            .string({
                required_error: "Email is required",
            })
            .email("Not a valid email"),
    }),
});