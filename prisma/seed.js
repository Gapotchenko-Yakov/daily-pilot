const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const startDate = new Date("2023-01-01");
const dateList = Array.from({ length: 10 }, (_, i) => {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  return date.toISOString().split("T")[0]; // Форматирование даты в YYYY-MM-DD
});

const taskDesriptions = [
  "Go for a morning run",
  "Call a friend to catch up",
  "Buy groceries for the week",
  "Clean and organize the desk",
  "Read a chapter of a book",
  "Cook a healthy dinner",
  "Watch a movie or TV show",
  "Do a short home workout",
  "Water the plants",
  "Plan the next day's schedule",
  "Write in a journal",
  "Take a walk in the park",
  "Try a new recipe",
  "Practice a hobby or craft",
  "Meditate for 10 minutes",
  "Tidy up the living room",
  "Listen to a podcast episode",
  "Review and respond to emails",
  "Organize digital files on your computer",
  "Prepare a list of goals for the week",
];

const main = async () => {
  // delete old data
  await prisma.task.deleteMany({});
  await prisma.finance.deleteMany({});
  await prisma.user.deleteMany({});

  // add new data
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
            amount: +(Math.random() * 1000).toFixed(2),
            type: i % 2 === 0 ? "INCOME" : "EXPENSE",
            date: new Date(dateList[Math.floor(i / 2)]),
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
            description: taskDesriptions[i],
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
