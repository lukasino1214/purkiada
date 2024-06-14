import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getAllUsers: publicProcedure.query(async({ ctx }) => {
        return ctx.db.user.findMany();
    }),

    sendForm: publicProcedure.query(async({ctx}) => {
        return ctx.db.user.create({
            data: {
                
            }
        })
    })
});
  