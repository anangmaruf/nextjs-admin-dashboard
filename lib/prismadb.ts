import { PrismaClient } from "@prisma/client";

// const createPrismaClient = () =>
//   new PrismaClient({
//     log: process.env.NODE_ENV === 'development' ? ["error", "query", "warn"] : ["error", "warn", "info"],
//   });
//
// const globalForPrisma = globalThis as unknown as {
//   prisma: ReturnType<typeof createPrismaClient> | undefined
// }
//
// export const db = globalForPrisma.prisma ?? createPrismaClient();
//
// if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = db;

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// }
//
// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;
//
// const db = globalThis.prismaGlobal ?? prismaClientSingleton()
//
// export default db;
// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;

// const client = global.prismadb || new PrismaClient();
//
// if (process.env.NODE_ENV ==='production') global.prismadb = client;
//
// export default client;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
