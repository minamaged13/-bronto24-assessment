import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  user_name: z.string()
    .min(1, "Username is required")
    .regex(/^\S+$/, "Username should not contain spaces"),
  email: z.string().email("Invalid email address"),
  age: z.number()
    .positive("Age must be a positive number")
    .min(4, "Age must be at least 4"),
  country: z.string().min(1, "Country is required"),
  job_title: z.string().min(1, "Job title is required"),
});

export type UserSchema = z.infer<typeof userSchema>;
