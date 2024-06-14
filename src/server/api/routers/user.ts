import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    getAllUsers: publicProcedure.query(async({ ctx }) => {
        return ctx.db.user.findMany();
    }),
    
    sendForm: publicProcedure.input(z.object({
        name: z.string(),
        surname: z.string(),
        email: z.string().email(),
        gdpr: z.boolean()
    })).mutation(async ({ctx, input}) => {
        ctx.db.user.create({
            data: {
                name: input.name,
                surname: input.surname,
                email: input.email,
                gdpr: input.gdpr,
            },
        })
    })
});
  