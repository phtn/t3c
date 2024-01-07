import { PaymentParams } from "@resource/payments";
import { publicProcedure } from "@server/trpc";

export const create = publicProcedure.input(PaymentParams);
