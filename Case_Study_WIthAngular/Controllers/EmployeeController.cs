using Case_Study_WIthAngular.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_WIthAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly APPDbContext _context;

        public EmployeeController(APPDbContext context)
        {
            this._context = context;
        }

        // GET: api/<EmployeeController>
        [HttpGet]
   
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
          //  return await _context.Employees.ToListAsync();
           return await _context.Employees.Include(e => e.EmpAddress).ToListAsync();
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public async Task<ActionResult<Employee>> Post(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public  IActionResult Put(int id, Employee modifiedemployee)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");
            var entity = _context.Employees.Include(e => e.EmpAddress).FirstOrDefault(e => e.Id == id);
            if (entity != null)
            {
                entity.Name = modifiedemployee.Name;
                entity.Age = modifiedemployee.Age;
                entity.JoinDate = modifiedemployee.JoinDate;
                entity.Designation = modifiedemployee.Designation;
                entity.MaritalStatus = modifiedemployee.MaritalStatus;
                entity.ImageUrl = modifiedemployee.ImageUrl;
                entity.EmpAddress.HouseNo = modifiedemployee.EmpAddress.HouseNo;
                entity.EmpAddress.City = modifiedemployee.EmpAddress.City;
                entity.EmpAddress.Street = modifiedemployee.EmpAddress.Street;
                entity = modifiedemployee;
                 _context.SaveChanges();
            }
            else
            {
                return NotFound();
            }
            return Ok();
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var emp = await _context.Employees.FindAsync(id);
            if(emp == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(emp);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //private bool EmployeeExists(int id)
        //{
        //    return _context.Employees.Any(e => e.Id == id);
        //}



    }
}
