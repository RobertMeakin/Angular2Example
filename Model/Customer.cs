namespace HanaaExample.Model
{
    public class Customer
    {
        public Customer(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;

        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}