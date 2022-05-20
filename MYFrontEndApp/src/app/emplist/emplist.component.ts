import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/IEmployee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  constructor(private empservice: EmpService, private activerout: ActivatedRoute) { }
  employees: IEmployee[] = [];
  ngOnInit(): void {
    this.empservice.getEmployees()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data)
        },
        err => console.log(err)
      );

  }
  deleteEmployee(id:any)
  {
    if(confirm("are u sure ?"))
this.empservice.RemoveEmployee(1);
  }




}
