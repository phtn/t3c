import { create } from "@procedures/payments";
import { router } from "@server/trpc";
import { lookup } from "@server/utils";

export const paymentsRouter = router({
  createInvoice: create.query(async ({ input }) => {
    return await lookup(input).then((response) => response);
  }),
});
