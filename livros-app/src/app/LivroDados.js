import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as controleLivro from './ControleLivros';

export default function LivroDados() {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState('');
  const navigate = useNavigate();

  const incluir = () => {
    const livro = {
      codigo: '', // código vazio conforme instrução
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora: Number(codEditora),
    };

    controleLivro.incluir(livro).then((ok) => {
      if (ok) {
        navigate('/');
      } else {
        alert('Erro ao incluir livro.');
      }
    });
  };

  return (
    <div>
      <h2>Incluir Livro</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          incluir();
        }}
      >
        <div>
          <label>Título:</label><br />
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Resumo:</label><br />
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autores (um por linha):</label><br />
          <textarea
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Código da Editora:</label><br />
          <input
            type="number"
            value={codEditora}
            onChange={(e) => setCodEditora(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Incluir</button>
      </form>
    </div>
  );
}
