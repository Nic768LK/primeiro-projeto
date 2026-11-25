import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class Directives {



  classeBotaoVerde = 'botao verde'
  classeBotaoVermelho = 'botao vermelho'

  aplicarEstiloVerde = false;
  estilosParagrafos = {'font-size': '14px', 'font-style': 'italic'}
  name = '';

  camposVisiveis = true;
  clientes = [
    {nome: 'Renato'},
    {nome: 'Rafael'},
    {nome: 'João'},
    {nome: 'Douglas'}
  ];

  aplicarEstilos(){
    
  }

  alterarParaMaiusculo($event: string){
    this.name = $event.toUpperCase()
  }

  EsconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
}

}
