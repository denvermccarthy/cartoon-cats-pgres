const { Router } = require('express');
const Cat = require('../models/CartoonCats');

module.exports = Router()
  .get('/', async (req, res) => {
    const catData = await Cat.getAll();

    res.json(catData);
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const find = await Cat.getById(id);
    res.json(find);
  });
