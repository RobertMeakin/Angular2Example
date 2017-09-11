import { Component,Injectable, Input } from '@angular/core';
import { Customer } from '../../Model/customer.model';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent {

    @Input()
    customerModel:Customer;

    showDetails(){
        alert('This message: ' + this.customerModel.firstName);
    }


}
