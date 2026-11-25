import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { DataBinding } from './data-binding/data-binding';
import { Directive } from '@angular/core';
import { Directives } from './directives/directives';
import { Customer } from './services/customer';
import { CustomerList } from './customer-list/customer-list';
import { PageNotFound } from './page-not-found/page-not-found';
import { CustomerDetails } from './customer-details/customer-details';
import { guardiaoGuard } from './guardiao-guard';
import { ReactiveForm } from './reactive-form/reactive-form';
import { TemplateForm } from './template-form/template-form';
import { WeatherService } from './services/weather';
import { Weather } from './weather/weather';
import { Pipes } from './pipes/pipes';

export const routes: Routes = [
    {path: 'hello-world', title: 'Hello World', component: HelloWorld},
    {path: 'data-binding', title: 'Data Binding', component: DataBinding, canActivate: [guardiaoGuard]},
    {path: 'directives', title: 'Directives', component: Directives},
    {path: 'customers', title: 'Customers', component: CustomerList},
    {path: 'customer/:id', title: 'Customer Details', component: CustomerDetails},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveForm},
    {path:'template-form', title: 'Template Form', component: TemplateForm},
    {path: 'weather', title: 'Clima', component: WeatherService},
    {path: 'pipes', title: 'Pipes', component: Pipes},
    {path: '', redirectTo: '/hello-world', pathMatch: 'full'},
    {path: '**', component: PageNotFound}
];
