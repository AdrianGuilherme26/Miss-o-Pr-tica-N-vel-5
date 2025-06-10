import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private apiURL = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiURL);
  }

  inserirLivro(livro: Livro): Observable<any> {
    return this.http.post(this.apiURL, livro);
  }

  deletarLivro(codigo: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${codigo}`);
  }
}


