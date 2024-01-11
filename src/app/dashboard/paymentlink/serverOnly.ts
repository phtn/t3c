"use server";

import { tRPC } from "@@trpc/rsc";
import { type PaymentSchema } from "@resource/payments";

export const createInvoice = async (values: PaymentSchema) => {
  return await tRPC.createInvoice.query(values);
};
