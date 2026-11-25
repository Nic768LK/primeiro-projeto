import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {



  message = 'Meu primeiro Data Binding!';

  imagePath = 'src/app/@Krt_maio30_trd-642.jpg';

  isDisabled = true;

  ariaLabel = 'Fechar';
  estilizarTitulo: any;

  botaoClass = 'botao';

  nomeCliente = ''

  enableCloseButton(){
    this.isDisabled = !this.isDisabled;
  }

  aplicarEstiloTitulo() {
    this.estilizarTitulo = !this.estilizarTitulo
  }

}
