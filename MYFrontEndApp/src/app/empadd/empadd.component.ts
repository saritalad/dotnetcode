import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/IEmployee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent {
  emp: IEmployee = {
    id: 0,
    name: '',
    age: 0,
    designation: '',
    salary: 0,
    joinDate: '',
    maritalStatus: '',
    imageUrl: '',
    empAddress:{
     
      city:'',
      street:'',
      houseNo:'',
      pincode:''
    }

  };


  
  mstatus: string[] = ["married", "unmarried"];
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  constructor(private _empsvc: EmpService, private router: Router) { }

  onSubmit(addempfrm: any) {
    //this.emp={id:6,name:"abcddd",age:20,designation:"Trainer",salary:200000,joinDate:'01-01-2000',maritalStatus:"married",imageUrl:""}
  //  var data={age: 30,
  //     designation: "trainer",
  //          imageUrl: "null",
  //     joinDate: "2022-04-18T07:40:08.784",
  //     maritalStatus: "married",
  //     name: "Sarita",
  //     salary: 20000}
 // addempfrm.joinDate="2022-04-18"
    console.log(this.emp);
    this._empsvc.AddEmployee(this.emp)
    .subscribe(
      response => {
        console.log(response.name);

        this.router.navigate(['/emplist']);
      },
      error => {
        console.log(error);
      },
    );


  }
}
