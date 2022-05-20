using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Case_Study_WIthAngular.Models
{
    public class APPDbContext:DbContext
    {
        public APPDbContext(DbContextOptions options):base(options)
        {

        }
        //one to one relation achived using fluent API 
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Employee>()
        //        .HasOne(a => a.address)
        //        .WithOne(b => b.employee)
        //        .HasForeignKey<Employee>(a => a.addressId);
        //}



        public DbSet <Employee> Employees { get; set; }
        public DbSet <Address> Addresses { get; set; }
    }
}
