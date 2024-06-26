import { userRouter } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";
import { pdfRouter } from "./routers/pdf";
import { textRouter } from "./routers/text";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  pdf: pdfRouter,
  text: textRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
