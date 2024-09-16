// prisma/seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
  const users = await Promise.all([
    prisma.user.create({ data: { name: "Alice", email: "alice@example.com" } }),
    prisma.user.create({ data: { name: "Bob", email: "bob@example.com" } }),
    prisma.user.create({
      data: { name: "Charlie", email: "charlie@example.com" },
    }),
  ]);

  for (const user of users) {
    await Promise.all(
      Array.from({ length: 20 }, (_, i) =>
        prisma.finance.create({
          data: {
            description: `Transaction ${i + 1}`,
            amount: Math.random() * 1000,
            type: i % 2 === 0 ? "INCOME" : "EXPENSE",
            date: new Date(),
            userId: user.id,
          },
        })
      )
    );

    await Promise.all(
      Array.from({ length: 20 }, (_, i) =>
        prisma.task.create({
          data: {
            title: `Task ${i + 1}`,
            description: `Description for task ${i + 1}`,
            dueDate: new Date(),
            status: "PENDING",
            userId: user.id,
          },
        })
      )
    );
  }

  console.log("Seed data inserted");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
