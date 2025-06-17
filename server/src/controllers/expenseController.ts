import { Response, Request } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );

    const expenseByCategory = expenseByCategorySummaryRaw.map((item) => ({
      ...item,
      amount: item.amount.toString(),
    }));

    res.json(expenseByCategory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed retrieving expenses by category!" });
  }
};
