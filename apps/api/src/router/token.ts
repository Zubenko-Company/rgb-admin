import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { ENV } from "../env.js";
import { publicProcedure } from "../trpc.js";

export const token = {
  token: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(({ input }) => {
      if (
        input.login === ENV.adminLogin &&
        input.password === ENV.adminPassword
      ) {
        const jwtSecret = ENV.jwtSecret;

        const token = jwt.sign(
          { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          jwtSecret,
        );
        return { jwt: token };
      }

      throw new TRPCError({ code: "UNAUTHORIZED" });
    }),
};
