import { PrismaClient } from '@prisma/client/edge'

// use `prisma` in your application to read and write data in your DB
declare global {
    var prisma: PrismaClient | undefined
}

const prismadb =  globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !=="production") globalThis.prisma = prismadb;

export default prismadb