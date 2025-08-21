/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 21 Aug, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Imports
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

// Global
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Create Prisma Client
const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate());

// Prevent multiple instances
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Export
export default prisma;
