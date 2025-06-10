import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ControleLivrosService, Livro } from './controle-livros.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected title = 'livros-app';
  livros: Livro[] = [];

  constructor(private livrosService: ControleLivrosService) {}

  ngOnInit(): void {
    this.livrosService.getLivros().subscribe({
      next: (dados) => this.livros = dados,
      error: (err) => console.error(err)
    });
  }
}
