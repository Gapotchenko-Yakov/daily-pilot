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
    profilePicture: "https://example.com/images/alice.jpg",
    bio: "A passionate runner and foodie.",
    settings: { theme: "dark", notifications: true },
    preferences: { language: "en", timezone: "UTC+1" },
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date("2024-09-20T08:00:00Z"),
    habits: [
      {
        title: "Run 5 km",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Try new recipes",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Drink 2 liters of water",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Meditate for 10 minutes",
        isPublic: false,
        tracking: [{ date: new Date(), status: "SKIPPED" }],
      },
      {
        title: "Do yoga",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Read a book",
        isPublic: true,
        tracking: [{ date: new Date(), status: "MISSED" }],
      },
      {
        title: "Explore new running routes",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Attend cooking classes",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Journal daily",
        isPublic: false,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Plan weekly meals",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
    ],
    goals: [
      {
        title: "Run a marathon",
        description: "Train for and complete a marathon.",
        priority: 1,
        dueDate: new Date("2025-06-01"),
        tags: [{ name: "Fitness" }, { name: "Running" }, { name: "Health" }],
      },
      {
        title: "Become a gourmet cook",
        description: "Learn gourmet cooking techniques.",
        priority: 2,
        dueDate: new Date("2025-01-01"),
        tags: [{ name: "Cooking" }, { name: "Food" }, { name: "Skills" }],
      },
      {
        title: "Improve my photography skills",
        description: "Take a photography course.",
        priority: 3,
        dueDate: new Date("2025-03-01"),
        tags: [{ name: "Photography" }, { name: "Skills" }],
      },
      {
        title: "Travel to 5 new countries",
        description: "Explore new cultures and cuisines.",
        priority: 2,
        dueDate: new Date("2025-12-31"),
        tags: [{ name: "Travel" }, { name: "Adventure" }],
      },
      {
        title: "Host dinner parties",
        description: "Invite friends over for dinner.",
        priority: 3,
        dueDate: new Date("2025-09-01"),
        tags: [{ name: "Social" }, { name: "Food" }],
      },
      {
        title: "Start a food blog",
        description: "Share my cooking journey online.",
        priority: 1,
        dueDate: new Date("2025-07-01"),
        tags: [{ name: "Writing" }, { name: "Food" }],
      },
      {
        title: "Join a local running club",
        description: "Meet fellow runners.",
        priority: 2,
        dueDate: new Date("2025-05-01"),
        tags: [{ name: "Community" }],
      },
      {
        title: "Learn about nutrition",
        description: "Understand nutrition basics.",
        priority: 1,
        dueDate: new Date("2025-04-01"),
        tags: [{ name: "Health" }, { name: "Knowledge" }],
      },
      {
        title: "Attend food festivals",
        description: "Experience culinary events.",
        priority: 3,
        dueDate: new Date("2025-10-01"),
        tags: [{ name: "Food" }],
      },
      {
        title: "Volunteer for a food bank",
        description: "Give back to the community.",
        priority: 2,
        dueDate: new Date("2025-11-01"),
        tags: [{ name: "Charity" }],
      },
    ],
    tasks: [
      {
        title: "Plan my next run",
        description: "Choose a route for my next run.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-25"),
        reminders: [{ reminderTime: new Date("2024-09-24T09:00:00Z") }],
      },
      {
        title: "Grocery shopping",
        description: "Buy ingredients for the week.",
        status: "IN_PROGRESS",
        priority: 1,
        dueDate: new Date("2024-09-21"),
        reminders: [{ reminderTime: new Date("2024-09-20T10:00:00Z") }],
      },
      {
        title: "Prepare a new recipe",
        description: "Cook a new dish for dinner.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-23"),
        reminders: [{ reminderTime: new Date("2024-09-22T10:00:00Z") }],
      },
      {
        title: "Schedule a photography session",
        description: "Plan a day for photography.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-30"),
        reminders: [{ reminderTime: new Date("2024-09-29T09:00:00Z") }],
      },
      {
        title: "Join a new running event",
        description: "Sign up for a local running event.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-29"),
        reminders: [{ reminderTime: new Date("2024-09-28T09:00:00Z") }],
      },
      {
        title: "Research travel destinations",
        description: "Find places to visit next year.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-10-01"),
        reminders: [{ reminderTime: new Date("2024-09-30T09:00:00Z") }],
      },
      {
        title: "Write blog post",
        description: "Document my cooking adventures.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-22"),
        reminders: [{ reminderTime: new Date("2024-09-21T10:00:00Z") }],
      },
      {
        title: "Book a cooking class",
        description: "Find and enroll in a class.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-28"),
        reminders: [{ reminderTime: new Date("2024-09-27T09:00:00Z") }],
      },
      {
        title: "Attend a food festival",
        description: "Participate in the local festival.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-10-05"),
        reminders: [{ reminderTime: new Date("2024-10-04T09:00:00Z") }],
      },
      {
        title: "Prepare for dinner party",
        description: "Plan the menu and guest list.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-26"),
        reminders: [{ reminderTime: new Date("2024-09-25T09:00:00Z") }],
      },
    ],
  },
  {
    name: "Bob",
    email: "bob@example.com",
    password: "bob123",
    profilePicture: "https://example.com/images/bob.jpg",
    bio: "Tech enthusiast and book lover.",
    settings: { theme: "light", notifications: false },
    preferences: { language: "fr", timezone: "UTC+2" },
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date("2024-09-19T10:00:00Z"),
    habits: [
      {
        title: "Read for 30 minutes",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Learn a new programming language",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Attend tech meetups",
        isPublic: true,
        tracking: [{ date: new Date(), status: "MISSED" }],
      },
      {
        title: "Write code daily",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Complete online courses",
        isPublic: false,
        tracking: [{ date: new Date(), status: "SKIPPED" }],
      },
      {
        title: "Experiment with new technologies",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Build personal projects",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Join coding challenges",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Follow tech news",
        isPublic: true,
        tracking: [{ date: new Date(), status: "MISSED" }],
      },
      {
        title: "Practice public speaking",
        isPublic: false,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
    ],
    goals: [
      {
        title: "Become a full-stack developer",
        description: "Master both front-end and back-end technologies.",
        priority: 1,
        dueDate: new Date("2025-06-01"),
        tags: [{ name: "Career" }, { name: "Tech" }],
      },
      {
        title: "Read 30 books this year",
        description: "Expand my knowledge and understanding.",
        priority: 2,
        dueDate: new Date("2025-01-01"),
        tags: [{ name: "Reading" }, { name: "Knowledge" }],
      },
      {
        title: "Contribute to open source",
        description: "Participate in meaningful projects.",
        priority: 3,
        dueDate: new Date("2025-03-01"),
        tags: [{ name: "Community" }],
      },
      {
        title: "Start a tech blog",
        description: "Share insights and experiences.",
        priority: 2,
        dueDate: new Date("2025-04-01"),
        tags: [{ name: "Writing" }, { name: "Tech" }],
      },
      {
        title: "Attend a tech conference",
        description: "Network with industry professionals.",
        priority: 2,
        dueDate: new Date("2025-07-01"),
        tags: [{ name: "Networking" }],
      },
      {
        title: "Build a portfolio website",
        description: "Showcase my skills and projects.",
        priority: 1,
        dueDate: new Date("2025-05-01"),
        tags: [{ name: "Web Development" }],
      },
      {
        title: "Learn about AI",
        description: "Understand the basics of artificial intelligence.",
        priority: 3,
        dueDate: new Date("2025-12-31"),
        tags: [{ name: "AI" }],
      },
      {
        title: "Get a tech certification",
        description: "Gain recognized qualifications.",
        priority: 1,
        dueDate: new Date("2025-10-01"),
        tags: [{ name: "Certification" }],
      },
      {
        title: "Join a hackathon",
        description: "Compete and collaborate with others.",
        priority: 2,
        dueDate: new Date("2025-09-01"),
        tags: [{ name: "Competitions" }],
      },
      {
        title: "Create a mobile app",
        description: "Develop an application for users.",
        priority: 1,
        dueDate: new Date("2025-08-01"),
        tags: [{ name: "Apps" }],
      },
    ],
    tasks: [
      {
        title: "Finish reading 'Clean Code'",
        description: "Complete the book this week.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-25"),
        reminders: [{ reminderTime: new Date("2024-09-24T09:00:00Z") }],
      },
      {
        title: "Complete online JavaScript course",
        description: "Finish the last module.",
        status: "IN_PROGRESS",
        priority: 1,
        dueDate: new Date("2024-09-21"),
        reminders: [{ reminderTime: new Date("2024-09-20T10:00:00Z") }],
      },
      {
        title: "Write a blog post about tech trends",
        description: "Document latest tech trends.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-23"),
        reminders: [{ reminderTime: new Date("2024-09-22T10:00:00Z") }],
      },
      {
        title: "Attend local tech meetup",
        description: "Network with local developers.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-30"),
        reminders: [{ reminderTime: new Date("2024-09-29T09:00:00Z") }],
      },
      {
        title: "Participate in a coding challenge",
        description: "Join the monthly coding competition.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-29"),
        reminders: [{ reminderTime: new Date("2024-09-28T09:00:00Z") }],
      },
      {
        title: "Update my portfolio",
        description: "Revamp the design and content.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-10-01"),
        reminders: [{ reminderTime: new Date("2024-09-30T09:00:00Z") }],
      },
      {
        title: "Schedule a public speaking practice",
        description: "Prepare for upcoming presentations.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-27"),
        reminders: [{ reminderTime: new Date("2024-09-26T10:00:00Z") }],
      },
      {
        title: "Research new programming languages",
        description: "Identify languages to learn next.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-28"),
        reminders: [{ reminderTime: new Date("2024-09-27T09:00:00Z") }],
      },
      {
        title: "Create a plan for open source contributions",
        description: "Outline my contributions for the year.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-10-02"),
        reminders: [{ reminderTime: new Date("2024-10-01T09:00:00Z") }],
      },
    ],
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    password: "charlie123",
    profilePicture: "https://example.com/images/charlie.jpg",
    bio: "Outdoor adventurer and photographer.",
    settings: { theme: "dark", notifications: true },
    preferences: { language: "es", timezone: "UTC+3" },
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date("2024-09-18T09:00:00Z"),
    habits: [
      {
        title: "Hike every weekend",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Take daily photos",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Explore a new trail",
        isPublic: true,
        tracking: [{ date: new Date(), status: "MISSED" }],
      },
      {
        title: "Volunteer for conservation",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Go camping monthly",
        isPublic: false,
        tracking: [{ date: new Date(), status: "SKIPPED" }],
      },
      {
        title: "Join a photography club",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Plan a road trip",
        isPublic: true,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Attend outdoor workshops",
        isPublic: true,
        tracking: [{ date: new Date(), status: "COMPLETED" }],
      },
      {
        title: "Create a nature journal",
        isPublic: false,
        tracking: [{ date: new Date(), status: "IN_PROGRESS" }],
      },
      {
        title: "Practice mindfulness outdoors",
        isPublic: true,
        tracking: [{ date: new Date(), status: "MISSED" }],
      },
    ],
    goals: [
      {
        title: "Climb a mountain",
        description: "Reach the summit of a significant peak.",
        priority: 1,
        dueDate: new Date("2025-06-01"),
        tags: [{ name: "Adventure" }, { name: "Outdoor" }],
      },
      {
        title: "Start a photography portfolio",
        description: "Build a collection of my best work.",
        priority: 2,
        dueDate: new Date("2025-01-01"),
        tags: [{ name: "Photography" }, { name: "Art" }],
      },
      {
        title: "Travel to national parks",
        description: "Visit 10 national parks this year.",
        priority: 3,
        dueDate: new Date("2025-03-01"),
        tags: [{ name: "Travel" }],
      },
      {
        title: "Learn wildlife photography",
        description: "Enhance my photography skills in nature.",
        priority: 2,
        dueDate: new Date("2025-04-01"),
        tags: [{ name: "Photography" }, { name: "Wildlife" }],
      },
      {
        title: "Volunteer for environmental causes",
        description: "Participate in local conservation efforts.",
        priority: 3,
        dueDate: new Date("2025-07-01"),
        tags: [{ name: "Community" }],
      },
      {
        title: "Plan a solo hiking trip",
        description: "Challenge myself with a solo adventure.",
        priority: 1,
        dueDate: new Date("2025-08-01"),
        tags: [{ name: "Adventure" }],
      },
      {
        title: "Join a photography exhibition",
        description: "Display my work publicly.",
        priority: 2,
        dueDate: new Date("2025-09-01"),
        tags: [{ name: "Exhibition" }, { name: "Art" }],
      },
      {
        title: "Create an outdoor vlog",
        description: "Share my adventures online.",
        priority: 1,
        dueDate: new Date("2025-10-01"),
        tags: [{ name: "Vlog" }, { name: "Adventure" }],
      },
      {
        title: "Run a nature workshop",
        description: "Teach others about outdoor skills.",
        priority: 2,
        dueDate: new Date("2025-12-31"),
        tags: [{ name: "Teaching" }, { name: "Nature" }],
      },
      {
        title: "Build a camping gear collection",
        description: "Acquire necessary equipment for trips.",
        priority: 1,
        dueDate: new Date("2025-11-01"),
        tags: [{ name: "Gear" }, { name: "Camping" }],
      },
    ],
    tasks: [
      {
        title: "Plan a weekend hike",
        description: "Select a trail and prepare gear.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-25"),
        reminders: [{ reminderTime: new Date("2024-09-24T09:00:00Z") }],
      },
      {
        title: "Edit hiking photos",
        description: "Process images from recent hikes.",
        status: "IN_PROGRESS",
        priority: 1,
        dueDate: new Date("2024-09-21"),
        reminders: [{ reminderTime: new Date("2024-09-20T10:00:00Z") }],
      },
      {
        title: "Attend a nature photography class",
        description: "Enhance my skills with expert guidance.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-23"),
        reminders: [{ reminderTime: new Date("2024-09-22T10:00:00Z") }],
      },
      {
        title: "Volunteer for a clean-up event",
        description: "Help with local environmental efforts.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-30"),
        reminders: [{ reminderTime: new Date("2024-09-29T09:00:00Z") }],
      },
      {
        title: "Research camping locations",
        description: "Find new places to explore.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-29"),
        reminders: [{ reminderTime: new Date("2024-09-28T09:00:00Z") }],
      },
      {
        title: "Join a wildlife photography workshop",
        description: "Learn from experienced photographers.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-10-01"),
        reminders: [{ reminderTime: new Date("2024-09-30T09:00:00Z") }],
      },
      {
        title: "Prepare for the next camping trip",
        description: "Gather all necessary equipment.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-09-27"),
        reminders: [{ reminderTime: new Date("2024-09-26T10:00:00Z") }],
      },
      {
        title: "Create a photo book of my adventures",
        description: "Compile my favorite images.",
        status: "PENDING",
        priority: 2,
        dueDate: new Date("2024-09-28"),
        reminders: [{ reminderTime: new Date("2024-09-27T09:00:00Z") }],
      },
      {
        title: "Plan a road trip itinerary",
        description: "Outline the route and stops.",
        status: "PENDING",
        priority: 1,
        dueDate: new Date("2024-10-02"),
        reminders: [{ reminderTime: new Date("2024-10-01T09:00:00Z") }],
      },
    ],
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
          userId: users.find((user) => user.email === tag.userEmail).id,
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
          userId: users.find((user) => user.email === tag.userEmail).id,
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
          userId: users.find((user) => user.email === tag.userEmail).id,
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
