import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/IEmployee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  constructor(private empservice:EmpService,private activerout:ActivatedRoute) { }
  employee:IEmployee;
  ngOnInit(): void {
 let Id = this.activerout.snapshot.params['id'];
    this.empservice.GetEmpById(Id)
    .subscribe(data=>{this.employee=data},
     ()=> console.log(this.employee),
  
     );
  }

}
