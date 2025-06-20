const express = require('express');
const router = express.Router();
const Pizza = require('../models/Pizza');

// Lista
router.get('/', async (req, res) => {
  const pizzas = await Pizza.findAll();
  res.render('pizzas/list', { pizzas });
});

// Formulário inclusão
router.get('/nova', (req, res) => {
  res.render('pizzas/form', { pizza: null });
});

// Formulário edição
router.get('/editar/:id', async (req, res) => {
  const pizza = await Pizza.findByPk(req.params.id);
  res.render('pizzas/form', { pizza });
});

// Salvar novo ou editar
router.post('/salvar', async (req, res) => {
  const { id, nome, preco, ingredientes } = req.body;
  if (id) {
    await Pizza.update({ nome, preco, ingredientes }, { where: { id } });
  } else {
    await Pizza.create({ nome, preco, ingredientes });
  }
  res.redirect('/pizzas');
});

// Excluir
router.get('/excluir/:id', async (req, res) => {
  await Pizza.destroy({ where: { id: req.params.id } });
  res.redirect('/pizzas');
});

module.exports = router;