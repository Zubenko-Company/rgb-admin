import { messages } from "./router/messages.js";
import { test } from "./router/test.js";
import { token } from "./router/token.js";
import { users } from "./router/users.js";
import { createTRPCRouter } from "./trpc.js";

export const appRouter = createTRPCRouter({
  test: createTRPCRouter(test),
  users: createTRPCRouter(users),
  messages: createTRPCRouter(messages),
  token: createTRPCRouter(token),
});

// export type definition of API
export type AppRouter = typeof appRouter;
