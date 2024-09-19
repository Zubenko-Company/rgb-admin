import { publicProcedure } from "../trpc.js";

export const test = {
  test: publicProcedure.query(() => {
    return { test: "test" };
  }),
};
