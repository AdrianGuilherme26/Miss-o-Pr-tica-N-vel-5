import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = "http://localhost:3030/livros";

export interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseURL);
    const dados: LivroMongo[] = await resposta.json();
    return dados.map(livroMongo =>
      new Livro(
        livroMongo._id ?? '',
        livroMongo.codEditora,
        livroMongo.titulo,
        livroMongo.resumo,
        livroMongo.autores
      )
    );
  }

  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo)
    });
    return resposta.ok;
  }
}
