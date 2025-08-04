const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  // Delete old data from all tables

  // TODO (performance): consider using Promise.all to run deletions in parallel for better performance
  await prisma.habitTracking.deleteMany();
  await prisma.goalReminder.deleteMany();
  await prisma.taskReminder.deleteMany();
  await prisma.task.deleteMany();
  await prisma.habit.deleteMany();
  await prisma.goal.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.taskTag.deleteMany();
  await prisma.transactionTag.deleteMany();
  await prisma.goalTag.deleteMany();
  await prisma.user.deleteMany();

  for (const user of userList) {
    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        profilePicture: user.profilePicture,
        bio: user.bio,
        settings: user.settings,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        lastLogin: user.lastLogin,
        preferences: user.preferences,
      },
    });

    // console.log(`Created user: ${createdUser.name}`);

    for (const transaction of user.transactions) {
      const createdTransaction = await prisma.transaction.create({
        data: {
          userId: createdUser.id,
          type: transaction.type,
          amount: transaction.amount,
          description: transaction.description,
          date: transaction.date,
          transactionTags: {
            create: transaction.transactionTags.map((tag) => ({
              name: tag.name,
              description: tag.description,
              userId: createdUser.id,
            })),
          },
        },
      });
      // console.log(`Created transaction: ${createdTransaction.description}`);
    }

    for (const task of user.tasks) {
      const createdTask = await prisma.task.create({
        data: {
          userId: createdUser.id,
          title: task.title,
          description: task.description,
          status: task.status,
          priority: task.priority,
          dueDate: task.dueDate,
          tags: {
            create: task.tags.map((tag) => ({
              name: tag.name,
              description: tag.description,
              userId: createdUser.id,
            })),
          },
          reminders: {
            create: task.reminders.map((reminder) => ({
              reminderTime: reminder.reminderTime,
            })),
          },
        },
      });
      // console.log(`Created task: ${createdTask.title}`);
    }

    for (const goal of user.goals) {
      const createdGoal = await prisma.goal.create({
        data: {
          userId: createdUser.id,
          title: goal.title,
          description: goal.description,
          priority: goal.priority,
          dueDate: goal.dueDate,
          tags: {
            create: goal.tags.map((tag) => ({
              name: tag.name,
              description: tag.description,
              userId: createdUser.id,
            })),
          },
          reminders: {
            create: goal.reminders.map((reminder) => ({
              reminderTime: reminder.reminderTime,
            })),
          },
        },
      });
      // console.log(`Created goal: ${createdGoal.title}`);
    }

    for (const habit of user.habits) {
      const createdHabit = await prisma.habit.create({
        data: {
          userId: createdUser.id,
          title: habit.title,
          description: habit.description,
          isPublic: habit.isPublic,
          tracking: {
            create: habit.tracking.map((track) => ({
              date: track.date,
              status: track.status,
            })),
          },
        },
      });
      // console.log(`Created habit: ${createdHabit.title}`);
    }
  }

  console.log('Seed data inserted');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
