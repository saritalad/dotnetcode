import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/IEmployee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {
 currentemp:IEmployee;
  empForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl('', [Validators.required, Validators.minLength(4)]),
    designation: new FormControl('', [Validators.required, Validators.minLength(5)]),
    salary: new FormControl('', [Validators.required, Validators.min(1000)]),
    joinDate: new FormControl('', [Validators.required, Validators.pattern('dd-MM-yyyy')]),
    maritalStatus: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // addressId:new FormControl(''),
    // houseNo: new FormControl('', [Validators.required, Validators.minLength(4)]),
    // street: new FormControl('', [Validators.required, Validators.minLength(4)]),
    // city: new FormControl('', [Validators.required, Validators.minLength(4)]),
    // pincode: new FormControl('', [Validators.required, Validators.minLength(6)]),
    // imageUrl: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private _empservice: EmpService, private router: Router, private activedoute: ActivatedRoute) { }


  ngOnInit(): void {
    let id = this.activedoute.snapshot.params["id"];
         this._empservice.GetEmpById(id)
      .subscribe(emp => {
        this.currentemp = emp;
        this.empForm = new FormGroup({
          id: new FormControl(this.currentemp?.id),
          name: new FormControl(this.currentemp?.name, [Validators.required]),
          age: new FormControl(this.currentemp?.age, [Validators.required]),
          designation: new FormControl(this.currentemp?.designation, [Validators.required]),
          salary: new FormControl(this.currentemp.salary, [Validators.required]),
          joinDate: new FormControl(this.currentemp.joinDate, [Validators.required]),
          maritalStatus: new FormControl(this.currentemp.maritalStatus, [Validators.required])
          // addressId:new FormControl(this.currentemp.empAddress.id),
          // houseNo: new FormControl(this.currentemp.empAddress.houseNo, [Validators.required, Validators.minLength(4)]),
          // street: new FormControl(this.currentemp.empAddress.street, [Validators.required, Validators.minLength(4)]),
          // city: new FormControl(this.currentemp.empAddress.city, [Validators.required, Validators.minLength(4)]),
          // pincode: new FormControl(this.currentemp.empAddress.pincode, [Validators.required, Validators.minLength(6)]),
          // imageUrl: new FormControl(this.currentemp.imageUrl, [Validators.required, Validators.minLength(5)])
        })
      },
      error => {
        console.log(error);
      }
      )

  }


  get Name() {
      return this.empForm.controls['name'];
  }
  get Age() {
    // return this.userForm.get('firstname');
    return this.empForm.controls['age'];
  }
  get Designation() {
    // return this.userForm.get('firstname');
    return this.empForm.controls['designation'];
  }
  get MaritalStatus() {
    // return this.userForm.get('firstname');
    return this.empForm.controls['maritalStatus'];
  }
  get Salary() {
    return this.empForm.controls['salary'];
  }
get JoinDate()
{
  return this.empForm.controls['joinDate'];
}

  // get ImageUrl() {
  //   // return this.userForm.get('firstname');
  //   return this.empForm.controls['imageUrl'];
  // }
  // get AddressId()
  // {
  //   return this.empForm.controls['addressId'];
  // }
  // get Street() {
  //   // return this.userForm.get('firstname');
  //   return this.empForm.controls['streets'];
  // }
  // get City() {
  //   // return this.userForm.get('firstname');
  //   return this.empForm.controls['city'];
  // }
  // get HouseNo()
  // {
  //   return this.empForm.controls['houseNo'];
  // }
  // get Pincode() {
  //   // return this.userForm.get('firstname');
  //   return this.empForm.controls['pincode'];
  // }


  onSubmit() {
    this._empservice.update(this.empForm.value).subscribe((res:IEmployee) => {
      console.log(this.empForm.value);
    
    // this.router.navigate(['/emplist']);
   },) }
 
   
 
  
}
