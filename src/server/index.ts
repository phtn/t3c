import { defaultRouter } from "@routers/default";
import { paymentsRouter } from "@routers/payments";
import { mergeRouters } from "@server/trpc";

export const appRouter = mergeRouters(defaultRouter, paymentsRouter);

export type AppRouter = typeof appRouter;
