import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-template-form',
  styleUrl: './template-form.css',
  templateUrl: './template-form.html',
})
export class TemplateForm {

  model = new Customer(null, '', '');

  generos = ['Masculino', 'Feminino', 'Prefiro não informar'];

  onSubmit(){
    console.warn(this.model)
  }



}
