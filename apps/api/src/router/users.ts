import { publicProcedure } from "../trpc.js";

export const users = {
  all: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.Users.find();
    return { users: users };
  }),
};
