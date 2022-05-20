using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Case_Study_WIthAngular.Models
{
    public class Address
    {
        public int Id { get; set; }
      
        [StringLength(40)]
        public string  HouseNo { get; set; }
      
        [StringLength(40)]
        public string Street { get; set; }
        [StringLength(40)]
        public string City{ get; set; }
        [StringLength(10)]
        public string Pincode { get; set; }
        
       
    }
}
