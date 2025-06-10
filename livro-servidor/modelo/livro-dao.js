const Livro = require('./livro-schema');

const obterLivros = async () => await Livro.find();
const incluir = async (livro) => await Livro.create(livro);
const excluir = async (codigo) => await Livro.deleteOne({ _id: codigo });

module.exports = { obterLivros, incluir, excluir };
