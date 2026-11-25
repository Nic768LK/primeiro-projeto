import { Component } from '@angular/core';
import { Customer } from '../services/customer';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-customer-details',
  styleUrl: './customer-details.css',
  templateUrl: './customer-details.html',
})
export class CustomerDetails {

  constructor(private route: ActivatedRoute, private customerService: Customer) {

  }

  customer: any;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.customer = this.customerService.getById(+id);
    }
  }
}
