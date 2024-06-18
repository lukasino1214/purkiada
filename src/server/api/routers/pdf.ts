import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pdfRouter = createTRPCRouter({

    deleteAllPdfs: publicProcedure.query(async({ ctx }) => {
        return ctx.db.pdf.deleteMany();
    }),
    
    getAllPdfs: publicProcedure.query(async({ ctx }) => {
        return ctx.db.pdf.findMany();
    }),

    sendForm: publicProcedure.input(z.object({
        name: z.string(),
        year: z.string(),
        link: z.string(),
    })).mutation(async ({ctx, input}) => {
        return ctx.db.pdf.create({
            data: {
                name: input.name,
                year: input.year,
                link: input.link,
            },
        })
    })
});