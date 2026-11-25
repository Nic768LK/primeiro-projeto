import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  imports: [RouterOutlet, RouterModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
 constructor(private auth: Auth) {

 }

  podeAcessar: boolean = false;

  ngOnInit() {
    this.podeAcessar = this.auth.podeAcessar();
  }

    alterarAcesso(e: any) {
      this.auth.update(e.target.checked);
    }
}

