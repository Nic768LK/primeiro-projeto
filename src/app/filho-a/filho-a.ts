import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-filho-a',
  styleUrl: './filho-a.css',
  templateUrl: './filho-a.html',
})
export class FilhoA {
  

  @Input() texto = '';

  @Output() textoPreenchido = new EventEmitter<string>();

  enviar(value: string) {
    this.textoPreenchido.emit(value);
  }
}
