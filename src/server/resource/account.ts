import { z } from "zod";

export const AccountType = z.string().default("INDIVIDUAL");

export const Individual = z.object({
  given_names: z.string().min(1).max(40),
  surname: z.string().min(1).max(40),
});

export const CreateAccountResource = z.object({
  reference_id: z.string(),
  type: AccountType,
  individual_detail: Individual,
  email: z.string().email().max(40),
  mobile_number: z.string().min(10).max(14),
});

export type AccountResource = z.infer<typeof CreateAccountResource>;

export const url = "/customers";
