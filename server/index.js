const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// route imports
const todos = require('./routes/todos');

const app = express();

// middleware
app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.json()); // bodyparser = untuk parsing dari request
app.use(morgan('dev')); // server logging

app.listen(5000, () => {
  console.log('server has started on port 5000');
});

// routes
app.use('/todos', todos);
// app.use('/users', users); // contoh route user
