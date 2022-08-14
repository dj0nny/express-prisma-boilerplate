const prisma = require('../src/prisma');

const seed = async () => {
  const todoList = [
    {
      id: 1,
      name: 'Clean the house',
      description: 'Stairs, living room and bedroom',
    },
    {
      id: 2,
      name: 'Clean the garden',
    }
  ];

  await prisma.todo.createMany({
    data: todoList
  });

  console.log(todoList);
}

seed()
  .then(async () => {
    await prisma.$disconnect;
  })
  .catch(async (error) => {
    console.error(`An error occurred: ${error}`);
    await prisma.$disconnect();
    process.exit(1);
  });