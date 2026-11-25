import { Component, inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {


  private formBuilder = inject(FormBuilder);
  //Utilizando FormGroup FormControl
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   cpf: new FormControl(''),
  //   address: new FormGroup(
  //     {
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl(''),
  //     }
  //   )
  // });

  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],

      }),
      nicknames: this.formBuilder.array([this.formBuilder.control('')])
    });

    get apelidos(){
      return this.profileForm.get('nicknames') as FormArray
    }


  preencherFormulario() {
    this.profileForm.patchValue({
      name: 'Nicolas',
      cpf: '55599412565',
      address: {
        street: 'R Albenzio',
        city: 'São José',
        state: 'SP',
        zip: '15398643'
      }
    })
  }

  adicionarApelido(){
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm() {
  console.warn(this.profileForm.value);
  }
}

