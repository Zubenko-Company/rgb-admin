import { test } from "./router/test.js";
import { createTRPCRouter } from "./trpc.js";

export const appRouter = createTRPCRouter({
  test: createTRPCRouter(test),
});

// export type definition of API
export type AppRouter = typeof appRouter;
