import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const portfolio: Project[] = await prisma.project.findMany();
    const portfolioJSON = JSON.stringify(portfolio);
    return new Response(portfolioJSON, { headers: { "Content-Type": "application/json" } });
  }