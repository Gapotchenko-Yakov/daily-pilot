const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userList = [
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: 'alice123',
    profilePicture: 'https://example.com/images/alice.jpg',
    bio: 'A passionate runner and foodie.',
    settings: { theme: 'dark', notifications: true },
    preferences: { language: 'en', timezone: 'UTC+1' },
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date('2024-09-20T08:00:00Z'),
    habits: [
      {
        title: 'Run 5 km',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Try new recipes',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Drink 2 liters of water',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Meditate for 10 minutes',
        isPublic: false,
        tracking: [{ date: new Date(), status: 'SKIPPED' }],
      },
      {
        title: 'Do yoga',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Read a book',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'MISSED' }],
      },
      {
        title: 'Explore new running routes',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Attend cooking classes',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Journal daily',
        isPublic: false,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Plan weekly meals',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
    ],
    goals: [
      {
        title: 'Run a marathon',
        description: 'Train for and complete a marathon.',
        priority: 1,
        dueDate: new Date('2025-06-01'),
        tags: [{ name: 'Fitness' }, { name: 'Running' }, { name: 'Health' }],
        reminders: [
          { reminderTime: new Date('2025-05-01') },
          { reminderTime: new Date('2025-05-15') },
        ],
      },
      {
        title: 'Become a gourmet cook',
        description: 'Learn gourmet cooking techniques.',
        priority: 2,
        dueDate: new Date('2025-01-01'),
        tags: [{ name: 'Cooking' }, { name: 'Food' }, { name: 'Skills' }],
        reminders: [
          { reminderTime: new Date('2024-12-01') },
          { reminderTime: new Date('2024-12-15') },
        ],
      },
      {
        title: 'Improve my photography skills',
        description: 'Take a photography course.',
        priority: 3,
        dueDate: new Date('2025-03-01'),
        tags: [{ name: 'Photography' }, { name: 'Skills' }],
        reminders: [
          { reminderTime: new Date('2025-02-01') },
          { reminderTime: new Date('2025-02-15') },
        ],
      },
      {
        title: 'Travel to 5 new countries',
        description: 'Explore new cultures and cuisines.',
        priority: 2,
        dueDate: new Date('2025-12-31'),
        tags: [{ name: 'Travel' }, { name: 'Adventure' }],
        reminders: [
          { reminderTime: new Date('2025-11-01') },
          { reminderTime: new Date('2025-12-01') },
        ],
      },
      {
        title: 'Host dinner parties',
        description: 'Invite friends over for dinner.',
        priority: 3,
        dueDate: new Date('2025-09-01'),
        tags: [{ name: 'Social' }, { name: 'Food' }],
        reminders: [
          { reminderTime: new Date('2025-08-01') },
          { reminderTime: new Date('2025-08-15') },
        ],
      },
      {
        title: 'Start a food blog',
        description: 'Share my cooking journey online.',
        priority: 1,
        dueDate: new Date('2025-07-01'),
        tags: [{ name: 'Writing' }, { name: 'Food' }],
        reminders: [
          { reminderTime: new Date('2025-06-01') },
          { reminderTime: new Date('2025-06-15') },
        ],
      },
      {
        title: 'Join a local running club',
        description: 'Meet fellow runners.',
        priority: 2,
        dueDate: new Date('2025-05-01'),
        tags: [{ name: 'Community' }],
        reminders: [{ reminderTime: new Date('2025-04-01') }],
      },
      {
        title: 'Learn about nutrition',
        description: 'Understand nutrition basics.',
        priority: 1,
        dueDate: new Date('2025-04-01'),
        tags: [{ name: 'Health' }, { name: 'Knowledge' }],
        reminders: [{ reminderTime: new Date('2025-03-01') }],
      },
      {
        title: 'Attend food festivals',
        description: 'Experience culinary events.',
        priority: 3,
        dueDate: new Date('2025-10-01'),
        tags: [{ name: 'Food' }],
        reminders: [{ reminderTime: new Date('2025-09-01') }],
      },
      {
        title: 'Volunteer for a food bank',
        description: 'Give back to the community.',
        priority: 2,
        dueDate: new Date('2025-11-01'),
        tags: [{ name: 'Charity' }],
        reminders: [{ reminderTime: new Date('2025-10-01') }],
      },
    ],

    tasks: [
      {
        title: 'Plan my next run',
        description: 'Choose a route for my next run.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-25'),
        tags: [{ name: 'Running' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-09-24T09:00:00Z') }],
      },
      {
        title: 'Grocery shopping',
        description: 'Buy ingredients for the week.',
        status: 'IN_PROGRESS',
        priority: 1,
        dueDate: new Date('2024-09-21'),
        tags: [{ name: 'Shopping' }, { name: 'Food' }],
        reminders: [{ reminderTime: new Date('2024-09-20T10:00:00Z') }],
      },
      {
        title: 'Prepare a new recipe',
        description: 'Cook a new dish for dinner.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-23'),
        tags: [{ name: 'Cooking' }, { name: 'Dinner' }],
        reminders: [{ reminderTime: new Date('2024-09-22T10:00:00Z') }],
      },
      {
        title: 'Schedule a photography session',
        description: 'Plan a day for photography.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-30'),
        tags: [{ name: 'Photography' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-09-29T09:00:00Z') }],
      },
      {
        title: 'Join a new running event',
        description: 'Sign up for a local running event.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-29'),
        tags: [{ name: 'Running' }, { name: 'Events' }],
        reminders: [{ reminderTime: new Date('2024-09-28T09:00:00Z') }],
      },
      {
        title: 'Research travel destinations',
        description: 'Find places to visit next year.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-10-01'),
        tags: [{ name: 'Travel' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-09-30T09:00:00Z') }],
      },
      {
        title: 'Write blog post',
        description: 'Document my cooking adventures.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-22'),
        tags: [{ name: 'Writing' }, { name: 'Blog' }],
        reminders: [{ reminderTime: new Date('2024-09-21T10:00:00Z') }],
      },
      {
        title: 'Book a cooking class',
        description: 'Find and enroll in a class.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-28'),
        tags: [{ name: 'Cooking' }, { name: 'Learning' }],
        reminders: [{ reminderTime: new Date('2024-09-27T09:00:00Z') }],
      },
      {
        title: 'Attend a food festival',
        description: 'Participate in the local festival.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-10-05'),
        tags: [{ name: 'Food' }, { name: 'Events' }],
        reminders: [{ reminderTime: new Date('2024-10-04T09:00:00Z') }],
      },
      {
        title: 'Prepare for dinner party',
        description: 'Plan the menu and guest list.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-26'),
        tags: [{ name: 'Social' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-09-25T09:00:00Z') }],
      },
    ],
    transactions: [
      {
        description: 'Grocery shopping',
        amount: 50.0,
        date: new Date('2024-09-18'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Groceries', description: 'Everyday food purchases' },
          { name: 'Healthy', description: 'Health-conscious choices' },
        ],
      },
      {
        description: 'Running shoes',
        amount: 120.0,
        date: new Date('2024-09-15'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Fitness', description: 'Related to physical fitness' },
          { name: 'Equipment', description: 'Sporting gear and tools' },
        ],
      },
      {
        description: 'Cooking class fee',
        amount: 75.0,
        date: new Date('2024-09-10'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Cooking', description: 'Learning culinary skills' },
          { name: 'Learning', description: 'Acquiring new knowledge' },
        ],
      },
      {
        description: 'Dinner party expenses',
        amount: 100.0,
        date: new Date('2024-09-08'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Social', description: 'Interacting with others' },
          { name: 'Cooking', description: 'Food preparation activities' },
        ],
      },
      {
        description: 'Photography workshop',
        amount: 200.0,
        date: new Date('2024-09-05'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Photography', description: 'Learning photography skills' },
          { name: 'Skills', description: 'Improving personal abilities' },
        ],
      },
      {
        description: 'Marathon entry fee',
        amount: 50.0,
        date: new Date('2024-08-30'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Fitness', description: 'Physical activity events' },
          { name: 'Events', description: 'Organized competitive activities' },
        ],
      },
      {
        description: 'Cookbook purchase',
        amount: 30.0,
        date: new Date('2024-09-01'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Cooking', description: 'Books on culinary topics' },
          { name: 'Learning', description: 'Educational material' },
        ],
      },
      {
        description: 'Yoga class pass',
        amount: 40.0,
        date: new Date('2024-09-03'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Fitness', description: 'Physical health and well-being' },
          { name: 'Wellness', description: 'Holistic health and relaxation' },
        ],
      },
      {
        description: 'Food festival tickets',
        amount: 60.0,
        date: new Date('2024-09-20'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Food', description: 'Culinary experiences' },
          { name: 'Events', description: 'Social or public gatherings' },
        ],
      },
      {
        description: 'New recipe ingredients',
        amount: 25.0,
        date: new Date('2024-09-17'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Cooking', description: 'Ingredients for preparing food' },
          { name: 'Groceries', description: 'Daily food supplies' },
        ],
      },
    ],
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    password: 'bob123',
    profilePicture: 'https://example.com/images/bob.jpg',
    bio: 'Tech enthusiast and book lover.',
    settings: { theme: 'light', notifications: false },
    preferences: { language: 'fr', timezone: 'UTC+2' },
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date('2024-09-19T10:00:00Z'),
    habits: [
      {
        title: 'Read for 30 minutes',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Learn a new programming language',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Attend tech meetups',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'MISSED' }],
      },
      {
        title: 'Write code daily',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Complete online courses',
        isPublic: false,
        tracking: [{ date: new Date(), status: 'SKIPPED' }],
      },
      {
        title: 'Experiment with new technologies',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Build personal projects',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Join coding challenges',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Follow tech news',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'MISSED' }],
      },
      {
        title: 'Practice public speaking',
        isPublic: false,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
    ],
    goals: [
      {
        title: 'Become a full-stack developer',
        description: 'Master both front-end and back-end technologies.',
        priority: 1,
        dueDate: new Date('2025-06-01'),
        tags: [{ name: 'Career' }, { name: 'Tech' }],
        reminders: [
          { reminderTime: new Date('2025-05-01') },
          { reminderTime: new Date('2025-05-15') },
        ],
      },
      {
        title: 'Read 30 books this year',
        description: 'Expand my knowledge and understanding.',
        priority: 2,
        dueDate: new Date('2025-01-01'),
        tags: [{ name: 'Reading' }, { name: 'Knowledge' }],
        reminders: [
          { reminderTime: new Date('2024-12-01') },
          { reminderTime: new Date('2024-12-15') },
        ],
      },
      {
        title: 'Contribute to open source',
        description: 'Participate in meaningful projects.',
        priority: 3,
        dueDate: new Date('2025-03-01'),
        tags: [{ name: 'Community' }],
        reminders: [
          { reminderTime: new Date('2025-02-01') },
          { reminderTime: new Date('2025-02-15') },
        ],
      },
      {
        title: 'Start a tech blog',
        description: 'Share insights and experiences.',
        priority: 2,
        dueDate: new Date('2025-04-01'),
        tags: [{ name: 'Writing' }, { name: 'Tech' }],
        reminders: [{ reminderTime: new Date('2025-03-01') }],
      },
      {
        title: 'Attend a tech conference',
        description: 'Network with industry professionals.',
        priority: 2,
        dueDate: new Date('2025-07-01'),
        tags: [{ name: 'Networking' }],
        reminders: [{ reminderTime: new Date('2025-06-01') }],
      },
      {
        title: 'Build a portfolio website',
        description: 'Showcase my skills and projects.',
        priority: 1,
        dueDate: new Date('2025-05-01'),
        tags: [{ name: 'Web Development' }],
        reminders: [{ reminderTime: new Date('2025-04-01') }],
      },
      {
        title: 'Learn about AI',
        description: 'Understand the basics of artificial intelligence.',
        priority: 3,
        dueDate: new Date('2025-12-31'),
        tags: [{ name: 'AI' }],
        reminders: [{ reminderTime: new Date('2025-11-01') }],
      },
      {
        title: 'Get a tech certification',
        description: 'Gain recognized qualifications.',
        priority: 1,
        dueDate: new Date('2025-10-01'),
        tags: [{ name: 'Certification' }],
        reminders: [{ reminderTime: new Date('2025-09-01') }],
      },
      {
        title: 'Join a hackathon',
        description: 'Compete and collaborate with others.',
        priority: 2,
        dueDate: new Date('2025-09-01'),
        tags: [{ name: 'Competitions' }],
        reminders: [{ reminderTime: new Date('2025-08-01') }],
      },
      {
        title: 'Create a mobile app',
        description: 'Develop an application for users.',
        priority: 1,
        dueDate: new Date('2025-08-01'),
        tags: [{ name: 'Apps' }],
        reminders: [{ reminderTime: new Date('2025-07-01') }],
      },
    ],

    tasks: [
      {
        title: "Finish reading 'Clean Code'",
        description: 'Complete the book this week.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-25'),
        tags: [{ name: 'Reading' }, { name: 'Learning' }],
        reminders: [{ reminderTime: new Date('2024-09-24T09:00:00Z') }],
      },
      {
        title: 'Complete online JavaScript course',
        description: 'Finish the last module.',
        status: 'IN_PROGRESS',
        priority: 1,
        dueDate: new Date('2024-09-21'),
        tags: [{ name: 'Education' }, { name: 'JavaScript' }],
        reminders: [{ reminderTime: new Date('2024-09-20T10:00:00Z') }],
      },
      {
        title: 'Write a blog post about tech trends',
        description: 'Document latest tech trends.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-23'),
        tags: [{ name: 'Writing' }, { name: 'Tech' }],
        reminders: [{ reminderTime: new Date('2024-09-22T10:00:00Z') }],
      },
      {
        title: 'Attend local tech meetup',
        description: 'Network with local developers.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-30'),
        tags: [{ name: 'Networking' }, { name: 'Events' }],
        reminders: [{ reminderTime: new Date('2024-09-29T09:00:00Z') }],
      },
      {
        title: 'Participate in a coding challenge',
        description: 'Join the monthly coding competition.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-29'),
        tags: [{ name: 'Coding' }, { name: 'Challenge' }],
        reminders: [{ reminderTime: new Date('2024-09-28T09:00:00Z') }],
      },
      {
        title: 'Update my portfolio',
        description: 'Revamp the design and content.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-10-01'),
        tags: [{ name: 'Portfolio' }, { name: 'Personal' }],
        reminders: [{ reminderTime: new Date('2024-09-30T09:00:00Z') }],
      },
      {
        title: 'Schedule a public speaking practice',
        description: 'Prepare for upcoming presentations.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-27'),
        tags: [{ name: 'Public Speaking' }, { name: 'Practice' }],
        reminders: [{ reminderTime: new Date('2024-09-26T10:00:00Z') }],
      },
      {
        title: 'Research new programming languages',
        description: 'Identify languages to learn next.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-28'),
        tags: [{ name: 'Research' }, { name: 'Programming' }],
        reminders: [{ reminderTime: new Date('2024-09-27T09:00:00Z') }],
      },
      {
        title: 'Create a plan for open source contributions',
        description: 'Outline my contributions for the year.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-10-02'),
        tags: [{ name: 'Open Source' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-10-01T09:00:00Z') }],
      },
    ],

    transactions: [
      {
        description: 'Book purchase',
        amount: 20.0,
        date: new Date('2024-09-18'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Reading', description: 'Books and literature' },
          { name: 'Knowledge', description: 'Gaining new knowledge' },
        ],
      },
      {
        description: 'Online course fee',
        amount: 150.0,
        date: new Date('2024-09-15'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Learning', description: 'Acquiring new skills' },
          { name: 'Tech', description: 'Technology-related topics' },
        ],
      },
      {
        description: 'Tech meetup ticket',
        amount: 30.0,
        date: new Date('2024-09-10'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Tech', description: 'Technology-related topics' },
          { name: 'Events', description: 'Social or professional events' },
        ],
      },
      {
        description: 'Gadget purchase',
        amount: 200.0,
        date: new Date('2024-09-08'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Tech', description: 'Technology-related items' },
          { name: 'Equipment', description: 'Tools and gadgets' },
        ],
      },
      {
        description: 'Coffee with friends',
        amount: 15.0,
        date: new Date('2024-09-05'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Social', description: 'Socializing with others' },
          {
            name: 'Networking',
            description: 'Building professional relationships',
          },
        ],
      },
      {
        description: 'Coding challenge registration',
        amount: 25.0,
        date: new Date('2024-08-30'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Coding', description: 'Programming challenges' },
          { name: 'Events', description: 'Competitions or challenges' },
        ],
      },
      {
        description: 'Webinar fee',
        amount: 10.0,
        date: new Date('2024-09-01'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Learning', description: 'Acquiring new skills' },
          { name: 'Webinars', description: 'Online seminars' },
        ],
      },
      {
        description: 'Public speaking workshop',
        amount: 100.0,
        date: new Date('2024-09-03'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Skills', description: 'Improving abilities' },
          { name: 'Speaking', description: 'Public speaking and presentation' },
        ],
      },
      {
        description: 'Networking dinner',
        amount: 80.0,
        date: new Date('2024-09-20'),
        type: 'EXPENSE',
        transactionTags: [
          {
            name: 'Networking',
            description: 'Building professional relationships',
          },
          { name: 'Social', description: 'Socializing with others' },
        ],
      },
      {
        description: 'Coding book',
        amount: 25.0,
        date: new Date('2024-09-17'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Coding', description: 'Books on programming' },
          { name: 'Learning', description: 'Acquiring knowledge' },
        ],
      },
    ],
  },
  {
    name: 'Charlie',
    email: 'charlie@example.com',
    password: 'charlie123',
    profilePicture: 'https://example.com/images/charlie.jpg',
    bio: 'Outdoor adventurer and photographer.',
    settings: { theme: 'dark', notifications: true },
    preferences: { language: 'es', timezone: 'UTC+3' },
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date('2024-09-18T09:00:00Z'),
    habits: [
      {
        title: 'Hike every weekend',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Take daily photos',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Explore a new trail',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'MISSED' }],
      },
      {
        title: 'Volunteer for conservation',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Go camping monthly',
        isPublic: false,
        tracking: [{ date: new Date(), status: 'SKIPPED' }],
      },
      {
        title: 'Join a photography club',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Plan a road trip',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Attend outdoor workshops',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'COMPLETED' }],
      },
      {
        title: 'Create a nature journal',
        isPublic: false,
        tracking: [{ date: new Date(), status: 'PENDING' }],
      },
      {
        title: 'Practice mindfulness outdoors',
        isPublic: true,
        tracking: [{ date: new Date(), status: 'MISSED' }],
      },
    ],
    goals: [
      {
        title: 'Climb a mountain',
        description: 'Reach the summit of a significant peak.',
        priority: 1,
        dueDate: new Date('2025-06-01'),
        tags: [{ name: 'Adventure' }, { name: 'Outdoor' }],
        reminders: [{ reminderTime: new Date('2025-05-01') }],
      },
      {
        title: 'Start a photography portfolio',
        description: 'Build a collection of my best work.',
        priority: 2,
        dueDate: new Date('2025-01-01'),
        tags: [{ name: 'Photography' }, { name: 'Art' }],
        reminders: [{ reminderTime: new Date('2024-12-01') }],
      },
      {
        title: 'Travel to national parks',
        description: 'Visit 10 national parks this year.',
        priority: 3,
        dueDate: new Date('2025-03-01'),
        tags: [{ name: 'Travel' }],
        reminders: [{ reminderTime: new Date('2025-02-01') }],
      },
      {
        title: 'Learn wildlife photography',
        description: 'Enhance my photography skills in nature.',
        priority: 2,
        dueDate: new Date('2025-04-01'),
        tags: [{ name: 'Photography' }, { name: 'Wildlife' }],
        reminders: [{ reminderTime: new Date('2025-03-01') }],
      },
      {
        title: 'Volunteer for environmental causes',
        description: 'Participate in local conservation efforts.',
        priority: 3,
        dueDate: new Date('2025-07-01'),
        tags: [{ name: 'Community' }],
        reminders: [{ reminderTime: new Date('2025-06-01') }],
      },
      {
        title: 'Plan a solo hiking trip',
        description: 'Challenge myself with a solo adventure.',
        priority: 1,
        dueDate: new Date('2025-08-01'),
        tags: [{ name: 'Adventure' }],
        reminders: [{ reminderTime: new Date('2025-07-01') }],
      },
      {
        title: 'Join a photography exhibition',
        description: 'Display my work publicly.',
        priority: 2,
        dueDate: new Date('2025-09-01'),
        tags: [{ name: 'Exhibition' }, { name: 'Art' }],
        reminders: [{ reminderTime: new Date('2025-08-01') }],
      },
      {
        title: 'Create an outdoor vlog',
        description: 'Share my adventures online.',
        priority: 1,
        dueDate: new Date('2025-10-01'),
        tags: [{ name: 'Vlog' }, { name: 'Adventure' }],
        reminders: [{ reminderTime: new Date('2025-09-01') }],
      },
      {
        title: 'Run a nature workshop',
        description: 'Teach others about outdoor skills.',
        priority: 2,
        dueDate: new Date('2025-12-31'),
        tags: [{ name: 'Teaching' }, { name: 'Nature' }],
        reminders: [{ reminderTime: new Date('2025-11-30') }],
      },
      {
        title: 'Build a camping gear collection',
        description: 'Acquire necessary equipment for trips.',
        priority: 1,
        dueDate: new Date('2025-11-01'),
        tags: [{ name: 'Gear' }, { name: 'Camping' }],
        reminders: [{ reminderTime: new Date('2025-10-01') }],
      },
    ],

    tasks: [
      {
        title: 'Plan a weekend hike',
        description: 'Select a trail and prepare gear.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-25'),
        tags: [{ name: 'Hiking' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-09-24T09:00:00Z') }],
      },
      {
        title: 'Edit hiking photos',
        description: 'Process images from recent hikes.',
        status: 'IN_PROGRESS',
        priority: 1,
        dueDate: new Date('2024-09-21'),
        tags: [{ name: 'Photography' }, { name: 'Editing' }],
        reminders: [{ reminderTime: new Date('2024-09-20T10:00:00Z') }],
      },
      {
        title: 'Attend a nature photography class',
        description: 'Enhance my skills with expert guidance.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-23'),
        tags: [{ name: 'Education' }, { name: 'Photography' }],
        reminders: [{ reminderTime: new Date('2024-09-22T10:00:00Z') }],
      },
      {
        title: 'Volunteer for a clean-up event',
        description: 'Help with local environmental efforts.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-30'),
        tags: [{ name: 'Volunteer' }, { name: 'Environment' }],
        reminders: [{ reminderTime: new Date('2024-09-29T09:00:00Z') }],
      },
      {
        title: 'Research camping locations',
        description: 'Find new places to explore.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-29'),
        tags: [{ name: 'Camping' }, { name: 'Research' }],
        reminders: [{ reminderTime: new Date('2024-09-28T09:00:00Z') }],
      },
      {
        title: 'Join a wildlife photography workshop',
        description: 'Learn from experienced photographers.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-10-01'),
        tags: [{ name: 'Photography' }, { name: 'Workshop' }],
        reminders: [{ reminderTime: new Date('2024-09-30T09:00:00Z') }],
      },
      {
        title: 'Prepare for the next camping trip',
        description: 'Gather all necessary equipment.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-09-27'),
        tags: [{ name: 'Camping' }, { name: 'Preparation' }],
        reminders: [{ reminderTime: new Date('2024-09-26T10:00:00Z') }],
      },
      {
        title: 'Create a photo book of my adventures',
        description: 'Compile my favorite images.',
        status: 'PENDING',
        priority: 2,
        dueDate: new Date('2024-09-28'),
        tags: [{ name: 'Photography' }, { name: 'Creative' }],
        reminders: [{ reminderTime: new Date('2024-09-27T09:00:00Z') }],
      },
      {
        title: 'Plan a road trip itinerary',
        description: 'Outline the route and stops.',
        status: 'PENDING',
        priority: 1,
        dueDate: new Date('2024-10-02'),
        tags: [{ name: 'Travel' }, { name: 'Planning' }],
        reminders: [{ reminderTime: new Date('2024-10-01T09:00:00Z') }],
      },
    ],
    transactions: [
      {
        description: 'Camping gear purchase',
        amount: 150.0,
        date: new Date('2024-09-18'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Camping', description: 'Outdoor camping equipment' },
          { name: 'Equipment', description: 'Tools and gear' },
        ],
      },
      {
        description: 'Photography workshop',
        amount: 200.0,
        date: new Date('2024-09-15'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Photography', description: 'Learning photography skills' },
          { name: 'Skills', description: 'Improving technical abilities' },
        ],
      },
      {
        description: 'Nature retreat',
        amount: 300.0,
        date: new Date('2024-09-10'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Adventure', description: 'Exciting outdoor activities' },
          { name: 'Nature', description: 'Experiences in natural settings' },
        ],
      },
      {
        description: 'Hiking guidebook',
        amount: 25.0,
        date: new Date('2024-09-08'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Hiking', description: 'Guide to hiking trails' },
          { name: 'Adventure', description: 'Outdoor exploration' },
        ],
      },
      {
        description: 'Outdoor workshop fee',
        amount: 100.0,
        date: new Date('2024-09-05'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Nature', description: 'Workshops in natural settings' },
          { name: 'Skills', description: 'Outdoor survival and nature skills' },
        ],
      },
      {
        description: 'Travel insurance',
        amount: 50.0,
        date: new Date('2024-08-30'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Travel', description: 'Insurance for travel safety' },
          { name: 'Safety', description: 'Protection against risks' },
        ],
      },
      {
        description: 'Park entrance fee',
        amount: 20.0,
        date: new Date('2024-09-01'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Nature', description: 'Access to natural parks' },
          { name: 'Adventure', description: 'Exploration of natural areas' },
        ],
      },
      {
        description: 'Photography supplies',
        amount: 80.0,
        date: new Date('2024-09-03'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Photography', description: 'Supplies for photography' },
          { name: 'Supplies', description: 'Necessary items for activities' },
        ],
      },
      {
        description: 'Camping trip expenses',
        amount: 100.0,
        date: new Date('2024-09-20'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Camping', description: 'Costs related to camping trips' },
          {
            name: 'Adventure',
            description: 'Outdoor exploration and activities',
          },
        ],
      },
      {
        description: 'Trail maps purchase',
        amount: 15.0,
        date: new Date('2024-09-17'),
        type: 'EXPENSE',
        transactionTags: [
          { name: 'Hiking', description: 'Maps of hiking trails' },
          { name: 'Maps', description: 'Guides for navigation' },
        ],
      },
    ],
  },
];

const main = async () => {
  // Delete old data from all tables

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
