import { defaultRouter } from "@routers/default";
import { mergeRouters } from "@server/trpc";

export const appRouter = mergeRouters(defaultRouter);

export type AppRouter = typeof appRouter;
