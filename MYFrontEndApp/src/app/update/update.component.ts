import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/IEmployee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  currentemp:IEmployee;
  empForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  
  });

  constructor(private _empservice:EmpService,private route:Router,private Activerout:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.Activerout.snapshot.params["id"];
         this._empservice.GetEmpById(id)
      .subscribe(emp => {
        this.currentemp = emp;
        this.empForm = new FormGroup({
          id: new FormControl(this.currentemp?.id),
          name: new FormControl(this.currentemp?.name, [Validators.required]),
         })
      },
      error => {
        console.log(error);
      }
      );


}
  
  get Name() {
    return this.empForm.controls['name'];
}


onSubmit() {
 // this._empservice.update(this.empForm.value)
   alert(this.empForm.controls['name'].value);
console.log(this.empForm.value);
 //  this.router.navigate(['/emplist']);
 } 
}
