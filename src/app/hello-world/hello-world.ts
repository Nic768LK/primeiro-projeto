import { Component } from '@angular/core';
import { FilhoA } from '../filho-a/filho-a';
import { FilhoB } from '../filho-b/filho-b';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FilhoA, FilhoB, CommonModule],
  selector: 'app-hello-world',
  styleUrl: './hello-world.css',
  templateUrl: './hello-world.html',
})
export class HelloWorld {
  textoVaiProFilho: string = '';
  textoVeioDoFilho: string = '';
}
