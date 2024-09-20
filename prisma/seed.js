const { PrismaClient } = require("@prisma/client");
import { getRandomInt } from "../src/lib/utils";

const prisma = new PrismaClient();

const startDate = new Date("2023-01-01");
const dateList = Array.from({ length: 10 }, (_, i) => {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  return date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
});

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

const userList = [
  {
    name: "Alice",
    email: "alice@example.com",
    password: "alice123",
  },
  { name: "Bob", email: "bob@example.com", password: "bob123" },
  ,
  { name: "Charlie", email: "charlie@example.com", password: "charlie123" },
];

const taskTagList = [
  {
    name: "Health",
    description: "Tasks related to physical and mental health.",
    userEmail: "alice@example.com",
  },
  {
    name: "Social",
    description: "Tasks that involve social interactions.",
    userEmail: "bob@example.com",
  },
  {
    name: "Chores",
    description: "Daily chores and home maintenance tasks.",
    userEmail: "charlie@example.com",
  },
  {
    name: "Reading",
    description: "Tasks related to reading books or articles.",
    userEmail: "alice@example.com",
  },
  {
    name: "Fitness",
    description: "Physical activities and workouts.",
    userEmail: "bob@example.com",
  },
];

const habitTagList = [
  {
    name: "Wellness",
    description: "Habits aimed at improving overall well-being.",
    userEmail: "alice@example.com",
  },
  {
    name: "Mindfulness",
    description: "Habits that promote mental clarity and focus.",
    userEmail: "bob@example.com",
  },
  {
    name: "Nutrition",
    description: "Habits focused on healthy eating and hydration.",
    userEmail: "charlie@example.com",
  },
  {
    name: "Learning",
    description: "Habits that involve learning new skills or knowledge.",
    userEmail: "alice@example.com",
  },
  {
    name: "Organization",
    description: "Habits that promote decluttering and organization.",
    userEmail: "bob@example.com",
  },
];

const goalTagList = [
  {
    name: "Financial",
    description: "Goals related to financial savings and investments.",
    userEmail: "alice@example.com",
  },
  {
    name: "Fitness",
    description: "Goals focused on physical fitness and health.",
    userEmail: "bob@example.com",
  },
  {
    name: "Personal Development",
    description: "Goals aimed at personal growth and self-improvement.",
    userEmail: "charlie@example.com",
  },
  {
    name: "Community",
    description: "Goals related to community service and involvement.",
    userEmail: "alice@example.com",
  },
  {
    name: "Education",
    description: "Goals focused on learning and skill acquisition.",
    userEmail: "bob@example.com",
  },
];

const taskList = [
  {
    title: "Go for a morning run",
    description: "Run for at least 30 minutes.",
    userEmail: "alice@example.com",
  },
  {
    title: "Call a friend to catch up",
    description: "Make a call to a friend.",
    userEmail: "bob@example.com",
  },
  {
    title: "Buy groceries for the week",
    description: "List and purchase weekly groceries.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Clean and organize the desk",
    description: "Declutter the workspace.",
    userEmail: "alice@example.com",
  },
  {
    title: "Read a chapter of a book",
    description: "Read the assigned chapter.",
    userEmail: "bob@example.com",
  },
  {
    title: "Cook a healthy dinner",
    description: "Prepare a balanced meal.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Watch a movie or TV show",
    description: "Enjoy a movie or favorite show.",
    userEmail: "alice@example.com",
  },
  {
    title: "Do a short home workout",
    description: "Complete a 20-minute workout.",
    userEmail: "bob@example.com",
  },
  {
    title: "Water the plants",
    description: "Ensure all plants are watered.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Plan the next day's schedule",
    description: "Organize tasks for tomorrow.",
    userEmail: "alice@example.com",
  },
];

const habitList = [
  {
    title: "Drink 2 liters of water",
    description: "Stay hydrated throughout the day.",
    userEmail: "alice@example.com",
  },
  {
    title: "Meditate for 10 minutes",
    description: "Practice mindfulness and relaxation.",
    userEmail: "bob@example.com",
  },
  {
    title: "Read for 30 minutes",
    description: "Spend time reading books.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Do 30 minutes of exercise",
    description: "Engage in physical activity.",
    userEmail: "alice@example.com",
  },
  {
    title: "Write in a gratitude journal",
    description: "Reflect on things to be grateful for.",
    userEmail: "bob@example.com",
  },
  {
    title: "Practice a new language for 20 minutes",
    description: "Learn vocabulary and phrases.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Cook a new recipe",
    description: "Try preparing a dish from a different cuisine.",
    userEmail: "alice@example.com",
  },
  {
    title: "Spend 15 minutes on self-care",
    description: "Take time to relax and rejuvenate.",
    userEmail: "bob@example.com",
  },
  {
    title: "Limit screen time to 1 hour",
    description: "Reduce time spent on screens.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Declutter a space in the house",
    description: "Organize and clean a specific area.",
    userEmail: "alice@example.com",
  },
];

const goalList = [
  {
    title: "Save $1000 for a vacation",
    description: "Set aside money for a trip.",
    userEmail: "alice@example.com",
  },
  {
    title: "Complete a 10k run",
    description: "Train for and finish a 10k race.",
    userEmail: "bob@example.com",
  },
  {
    title: "Read 12 books in a year",
    description: "Aim for one book per month.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Learn to play a musical instrument",
    description: "Take lessons and practice regularly.",
    userEmail: "alice@example.com",
  },
  {
    title: "Start a blog and post weekly",
    description: "Share thoughts and experiences online.",
    userEmail: "bob@example.com",
  },
  {
    title: "Reduce sugar intake for a month",
    description: "Cut down on sugary foods.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Volunteer once a month",
    description: "Give back to the community.",
    userEmail: "alice@example.com",
  },
  {
    title: "Complete a home improvement project",
    description: "Work on a renovation task.",
    userEmail: "bob@example.com",
  },
  {
    title: "Take a photography course",
    description: "Learn skills to improve photography.",
    userEmail: "charlie@example.com",
  },
  {
    title: "Attend a workshop or seminar",
    description: "Gain knowledge in a specific area.",
    userEmail: "alice@example.com",
  },
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
  await prisma.habitTracking.deleteMany({});
  await prisma.goalReminder.deleteMany({});
  await prisma.taskReminder.deleteMany({});

  // Add new data
  const users = await Promise.all(
    userList.map((user) =>
      prisma.user.create({
        data: { name: user.name, email: user.email, password: user.password },
      })
    )
  );

  const taskTags = await Promise.all(
    taskTagList.map((tag) =>
      prisma.taskTag.create({
        data: {
          name: tag.name,
          description: tag.description,
          userId: users[getRandomInt(0, users.length - 1)].id, // Assume tags belong to the first user
        },
      })
    )
  );

  const goalTags = await Promise.all(
    goalTagList.map((tag) =>
      prisma.goalTag.create({
        data: {
          name: tag.name,
          description: tag.description,
          userId: users[0].id, // Assume tags belong to the first user
        },
      })
    )
  );

  const habitTags = await Promise.all(
    habitTagList.map((tag) =>
      prisma.habitTag.create({
        data: {
          name: tag.name,
          description: tag.description,
          userId: users[0].id, // Assume tags belong to the first user
        },
      })
    )
  );

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
