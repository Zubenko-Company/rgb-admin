import { test } from "./router/test.js";
import { users } from "./router/users.js";
import { createTRPCRouter } from "./trpc.js";

export const appRouter = createTRPCRouter({
  test: createTRPCRouter(test),
  users: createTRPCRouter(users),
});

// export type definition of API
export type AppRouter = typeof appRouter;
