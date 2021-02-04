const express = require('express');
const caminho = express.Router(); 
const sql = require('../config/crud/index');

caminho.get("/", sql.selectItens);

caminho.post("/", sql.saveItens);

module.exports = caminho;

