const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.PORT || 8000;

// Log requests
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));


// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  return res.render('index')
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
