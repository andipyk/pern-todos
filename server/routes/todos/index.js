const express = require('express');
const pool = require('../../db');
// const get = require('./get'); // kalau mau lebih abstracted
// const post = require('./post'); // kalau mau lebih abstracted
// const patch = require('./patch'); // kalau mau lebih abstracted

const router = express.Router();

// create a todo
router.post('/', async (req, res) => {
  try {
    // console.log(req.body);

    const { description } = req.body;
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todo
router.get('/', async (_, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// get a todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);

    res.json('Todo was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

    res.json('Todo was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});
// create a todo
router.post('/', async (req, res) => {
  try {
    // console.log(req.body);

    const { description } = req.body;
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todo
router.get('/', async (_, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// get a todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);

    res.json('Todo was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

    res.json('Todo was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
