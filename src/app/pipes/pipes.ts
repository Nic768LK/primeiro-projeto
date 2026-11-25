import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class Pipes {

  date: Date = new Date();

  nameText: string = '';

  value: number = 45.50;

  pi: number = 3.14155926539;

  changeName(name: string){
    this.nameText = name;
  }

}
