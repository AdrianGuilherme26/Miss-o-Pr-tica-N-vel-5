import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Livro {
  _id?: string;
  titulo: string;
  autor: string;
  ano: number;
  editora: string;
}

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly baseUrl = 'http://localhost:3030/livros';

  constructor(private http: HttpClient) {}

  obterLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl);
  }

  incluirLivro(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro);
  }

  excluirLivro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
