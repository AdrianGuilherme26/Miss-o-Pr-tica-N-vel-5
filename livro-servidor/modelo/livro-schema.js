
const mongoose = require('mongoose');
const LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano: Number
});
const Livro = mongoose.model('Livro', LivroSchema, 'livros');
module.exports = Livro;
