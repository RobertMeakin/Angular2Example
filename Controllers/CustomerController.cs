using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HanaaExample.Model;
using Microsoft.AspNetCore.Mvc;

namespace HanaaExample.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        [HttpGet("[action]")]
        public List<Customer> GetListofCustomers()
        {
            var c1 = new Customer("Hanaa", "Ali");
            var c2 = new Customer("Robert", "Meakin");
            var c3 = new Customer("James", "Kirk");

            List<Customer> lstCustomer = new List<Customer>();
            lstCustomer.Add(c1);
            lstCustomer.Add(c2);
            lstCustomer.Add(c3);

            return lstCustomer;
        }
    }
}
