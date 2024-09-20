import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { publicProcedure } from "../trpc.js";

export const token = {
  token: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(({ input }) => {
      if (
        input.login === process.env.ADMIN_LOGIN &&
        input.password === process.env.ADMIN_PASSWORD
      ) {
        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        }
        const token = jwt.sign(
          { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          jwtSecret,
        );
        return { jwt: token };
      }

      throw new TRPCError({ code: "UNAUTHORIZED" });
    }),
};
