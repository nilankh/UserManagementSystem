const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const app = express();

const connectDB = require('./config/mongoose');

dotenv.config({ path: 'config.env' });
// console.log(process.env)
const PORT = process.PORT || 8000;

// Log requests
app.use(morgan('tiny'));

// MongoDB Connection
connectDB();
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

// Load routers
app.use('/', require('./routes/router'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
