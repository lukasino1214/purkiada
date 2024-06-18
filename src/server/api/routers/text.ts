import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const textRouter = createTRPCRouter({
    deleteAllTexts: publicProcedure.query(async({ ctx }) => {
        return ctx.db.text.deleteMany();
    }),
    
    getAllTexts: publicProcedure.query(async({ ctx }) => {
        return ctx.db.text.findMany();
    }),

    sendForm: publicProcedure.input(z.object({
        text: z.string(),
    })).mutation(async ({ctx, input}) => {
        return ctx.db.text.create({
            data: {
                text: input.text,
            },
        })
    })
});