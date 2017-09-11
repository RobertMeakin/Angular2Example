import { Injectable, Inject } from '@angular/core';
import { Customer } from './../../Model/customer.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) { }

    // getCustomers():Array<Customer>{

    //     // http.get('api/Customers/GetListofCustomers').subscribe(result => {
    //     // }, error => console.error(error));
    // }

    getCustomers():Promise<Array<Customer>> {

        var promise = new Promise<Array<Customer>>((resolve, reject) => {

            this.http.get(this.baseUrl + 'api/Customer/GetListofCustomers').subscribe(result => {
                let r = <Array<Customer>>result.json();
                resolve(r);
            }, error => {
                reject("Error Message: "+error);
            });
        });

        return promise;
    }


    getCustomerExample(): Promise<Customer> {

        var promise = new Promise<Customer>((resolve, reject) => {

            //Using timeout, after 3 seconds the promise will be resolved
            setTimeout(function () {
                var c = new Customer();
                c.firstName = "R";
                c.lastName = "M";
                resolve(c); //resolved here;
            }, 3000);


        });

        return promise;
    }





}