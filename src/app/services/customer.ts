import { Service } from '@angular/core';


@Service()
export class Customer {


    private customers = [
        {id: 1, nome: 'Renato'},
        {id: 2, nome: 'João'},
        {id: 3, nome: 'Adriano'}
    ]

    getCustomers(){
        return this.customers;
            
    
    }
    getById(id: number) {
        let customer = this.customers.find(c =>{
            return c.id === id;
        });

        return customer;
    }
}
