import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    deleteAllUsers: publicProcedure.query(async({ ctx }) => {
        return ctx.db.user.deleteMany();
    }),

    getAllUsers: publicProcedure.query(async({ ctx }) => {
        return ctx.db.user.findMany();
    }),
    
    sendForm: publicProcedure.input(z.object({
        name: z.string(),
        surname: z.string(),
        email: z.string().email(),
        gdpr: z.literal<boolean>(true),
        school: z.string()
    })).mutation(async ({ctx, input}) => {
        return ctx.db.user.create({
            data: {
                school: input.school,
                name: input.name,
                surname: input.surname,
                email: input.email,
                gdpr: input.gdpr,
            },
        })
    })
});
  