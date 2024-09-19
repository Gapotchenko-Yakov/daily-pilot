const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const startDate = new Date("2023-01-01");
const dateList = Array.from({ length: 10 }, (_, i) => {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  return date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
});

// Updated task, habit, and goal lists with title and description
const taskList = [
  {
    title: "Go for a morning run",
    description: "Run for at least 30 minutes.",
  },
  {
    title: "Call a friend to catch up",
    description: "Make a call to a friend.",
  },
  {
    title: "Buy groceries for the week",
    description: "List and purchase weekly groceries.",
  },
  {
    title: "Clean and organize the desk",
    description: "Declutter the workspace.",
  },
  {
    title: "Read a chapter of a book",
    description: "Read the assigned chapter.",
  },
  { title: "Cook a healthy dinner", description: "Prepare a balanced meal." },
  {
    title: "Watch a movie or TV show",
    description: "Enjoy a movie or favorite show.",
  },
  {
    title: "Do a short home workout",
    description: "Complete a 20-minute workout.",
  },
  { title: "Water the plants", description: "Ensure all plants are watered." },
  {
    title: "Plan the next day's schedule",
    description: "Organize tasks for tomorrow.",
  },
];

const habitList = [
  {
    title: "Drink 2 liters of water",
    description: "Stay hydrated throughout the day.",
  },
  {
    title: "Meditate for 10 minutes",
    description: "Practice mindfulness and relaxation.",
  },
  { title: "Read for 30 minutes", description: "Spend time reading books." },
  {
    title: "Do 30 minutes of exercise",
    description: "Engage in physical activity.",
  },
  {
    title: "Write in a gratitude journal",
    description: "Reflect on things to be grateful for.",
  },
  {
    title: "Practice a new language for 20 minutes",
    description: "Learn vocabulary and phrases.",
  },
  {
    title: "Cook a new recipe",
    description: "Try preparing a dish from a different cuisine.",
  },
  {
    title: "Spend 15 minutes on self-care",
    description: "Take time to relax and rejuvenate.",
  },
  {
    title: "Limit screen time to 1 hour",
    description: "Reduce time spent on screens.",
  },
  {
    title: "Declutter a space in the house",
    description: "Organize and clean a specific area.",
  },
];

const goalList = [
  {
    title: "Save $1000 for a vacation",
    description: "Set aside money for a trip.",
  },
  {
    title: "Complete a 10k run",
    description: "Train for and finish a 10k race.",
  },
  {
    title: "Read 12 books in a year",
    description: "Aim for one book per month.",
  },
  {
    title: "Learn to play a musical instrument",
    description: "Take lessons and practice regularly.",
  },
  {
    title: "Start a blog and post weekly",
    description: "Share thoughts and experiences online.",
  },
  {
    title: "Reduce sugar intake for a month",
    description: "Cut down on sugary foods.",
  },
  {
    title: "Volunteer once a month",
    description: "Give back to the community.",
  },
  {
    title: "Complete a home improvement project",
    description: "Work on a renovation task.",
  },
  {
    title: "Take a photography course",
    description: "Learn skills to improve photography.",
  },
  {
    title: "Attend a workshop or seminar",
    description: "Gain knowledge in a specific area.",
  },
];

// Sample transactions
const transactionsList = [
  { description: "Salary payment", amount: 3000, type: "INCOME" },
  { description: "Grocery shopping", amount: -150, type: "EXPENSE" },
  { description: "Monthly rent", amount: -1200, type: "EXPENSE" },
  { description: "Freelance project payment", amount: 500, type: "INCOME" },
  { description: "Gym membership", amount: -50, type: "EXPENSE" },
  { description: "Gift from a friend", amount: 100, type: "INCOME" },
  { description: "Dinner at a restaurant", amount: -75, type: "EXPENSE" },
  { description: "Online course purchase", amount: -200, type: "EXPENSE" },
  { description: "Selling old furniture", amount: 150, type: "INCOME" },
  { description: "Emergency car repair", amount: -300, type: "EXPENSE" },
];

const main = async () => {
  // Delete old data from all tables
  await prisma.task.deleteMany({});
  await prisma.habit.deleteMany({});
  await prisma.goal.deleteMany({});
  await prisma.transaction.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.taskTag.deleteMany({});
  await prisma.habitTag.deleteMany({});
  await prisma.goalTag.deleteMany({});

  // Add new data
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@example.com",
        password: "password123",
      },
    }),
    prisma.user.create({
      data: { name: "Bob", email: "bob@example.com", password: "password123" },
    }),
    prisma.user.create({
      data: {
        name: "Charlie",
        email: "charlie@example.com",
        password: "password123",
      },
    }),
  ]);

  for (const user of users) {
    // Create transactions
    await Promise.all(
      transactionsList.map((transaction) =>
        prisma.transaction.create({
          data: {
            description: transaction.description,
            amount: transaction.amount,
            type: transaction.type,
            date: new Date(),
            userId: user.id,
          },
        })
      )
    );

    // Create tasks
    await Promise.all(
      taskList.map((task) =>
        prisma.task.create({
          data: {
            title: task.title,
            description: task.description,
            dueDate: new Date(),
            status: "PENDING",
            userId: user.id,
          },
        })
      )
    );

    // Create habits
    await Promise.all(
      habitList.map((habit) =>
        prisma.habit.create({
          data: {
            title: habit.title,
            description: habit.description,
            userId: user.id,
          },
        })
      )
    );

    // Create goals
    await Promise.all(
      goalList.map((goal) =>
        prisma.goal.create({
          data: {
            title: goal.title,
            description: goal.description,
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
