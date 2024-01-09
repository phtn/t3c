"use server";

import { tRPC } from "@@trpc/rsc";
import { PaymentSchema } from "@resource/payments";

export const createInvoice = async (values: PaymentSchema) => {
  return await tRPC.createInvoice.query(values);
};
