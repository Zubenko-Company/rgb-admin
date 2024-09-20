import { adminProcedure } from "../trpc.js";

export const messages = {
  all: adminProcedure.query(async ({ ctx }) => {
    const mesgs = await ctx.db.Mesages.find();
    return mesgs;
  }),
};
