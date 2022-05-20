using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Case_Study_WIthAngular.Models
{
    public class Employee
    {
        public int  Id{ get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [Range(18,60)]
        public int Age { get; set; }
        [Required]
        [StringLength(50)]
        public string  Designation { get; set; }
        [Required]
        [Column(TypeName = "decimal(14,2)")]
        public decimal  Salary { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}")]
        
        public Nullable <DateTime> JoinDate { get; set; }
        [StringLength(20)]
        public string MaritalStatus { get; set; }
        [StringLength(2500)]
        public string ImageUrl { get; set; }
       [ForeignKey("AddressId")]
        public Address EmpAddress { get; set; }
   
    }
}
