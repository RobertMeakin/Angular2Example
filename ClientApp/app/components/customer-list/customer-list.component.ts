import { CustomerService } from './../../common/services/customers.service';
import { Component } from '@angular/core';
import { Customer } from '../../Model/customer.model';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls:["./customer-list.component.css"]

})
export class CustomerListComponent {
   customerList:Array<Customer>;


   constructor(private customerService: CustomerService){
    //    this.customerList= new Array<Customer>();
    //    var c1 = new Customer();
    //    c1.firstName="Hanaa";
    //    c1.lastName="Ali";

    //    var c2 = new Customer();
    //    c2.firstName = "Robert";
    //    c2.lastName = "Meakin";

    //    this.customerList.push(c1,c2);

    this.customerService.getCustomers()
        .then(data=>{
            this.customerList=data;
        })
        .catch(error=>{
            console.log("Something went wrong.");
            console.log(error);
        })


       
   }
}
