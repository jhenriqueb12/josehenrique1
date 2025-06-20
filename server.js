const express = require('express');
const app = express();
const path = require('path');
const pizzaRoutes = require('./routes/pizzaRoutes');
const db = require('./database');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/pizzas', pizzaRoutes);

db.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});