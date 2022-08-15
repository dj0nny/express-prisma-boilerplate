const prisma = require('../prisma');

const getAllTodo = async (req, res, next) => {
  try {
    const todoList = await prisma.todo.findMany();

    res.status(200).json({
      todoList
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
}

const getTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;

    const todo = await prisma.todo.findUnique({
      where: {
        id: parseInt(todoId)
      },
    });

    res.status(200).json({
      todo,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
}

const createTodo = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      throw new Error('Todo name must be defined');
    }

    const newTodo = await prisma.todo.create({
      data: {
        name,
        description,
      }
    });

    res.status(200).json({
      newTodo,
    });

  } catch (error) {
    res.status(400);
    next(error);
  }
}

const updateTodo = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const { todoId } = req.params;

    if (!name) {
      throw new Error('Todo name must be defined');
    }

    const todoExists = await prisma.todo.findUnique({
      where: {
        id: parseInt(todoId),
      }
    });

    if (!todoExists) {
      throw new Error(`Todo with id ${todoId} not exist`);
    }

    const updatedTodo = await prisma.todo.update({
      where: {
        id: parseInt(todoId),
      },
      data: {
        name,
        description
      }
    })

    res.status(200).json({
      updatedTodo,
    });

  } catch (error) {
    res.status(400);
    next(error);
  }
}

const deleteTodo = async (req, res, next) => {
  try {
    const { todoId } = req.params;

    const deletedTodo = await prisma.todo.delete({
      where: {
        id: parseInt(todoId),
      }
    });

    res.status(200).json({
      deletedTodo,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
}


module.exports = {
  getAllTodo,
  getTodo,
  deleteTodo,
  createTodo,
  updateTodo,
}