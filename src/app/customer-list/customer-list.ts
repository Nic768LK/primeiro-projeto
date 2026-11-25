import { Component } from '@angular/core';
import { Customer } from '../services/customer';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgFor, RouterLink, CommonModule],
  selector: 'app-customer-list',
  styleUrl: './customer-list.css',
  templateUrl: './customer-list.html',
})
export class CustomerList {

  constructor(private customer: Customer){

  }
  customers: any;
  
  ngOnInit(){
    this.customers = this.customer.getCustomers();
  }
}
