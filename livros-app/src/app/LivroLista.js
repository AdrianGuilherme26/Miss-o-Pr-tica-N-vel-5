import React, { useEffect, useState } from 'react';
import * as controleLivro from './ControleLivros';

function LinhaLivro({ livro, excluir }) {
  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivro.obterLivros().then((resultado) => {
      setLivros(resultado);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo).then(() => {
      setCarregado(false);
    });
  };

  return (
    <div>
      <h2>Lista de Livros</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro
              key={index}
              livro={livro}
              excluir={() => excluir(livro.codigo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
