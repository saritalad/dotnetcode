import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IEmployee } from 'src/IEmployee';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

//url:string="http://localhost:3000/Employees";
url:string="http://localhost:55193/api/employee";
headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>
  {
   
   return this.http.get(this.url);
 
  }
 
 AddEmployee(data:IEmployee):Observable<IEmployee>{
 
   return this.http.post<IEmployee>(this.url,data);
 
 }
 GetEmpById(id:number):Observable<IEmployee>
 {
   return this.http.get<IEmployee>(`${this.url}/${id}`);
 }
 
 update(data: any): Observable<any> {
  let API_Url=this.url;
  return this.http.put(API_Url, data).pipe(
    catchError(this.handleError)
  )
}

RemoveEmployee(id: number): Observable<IEmployee>{
  
  return this.http.delete<IEmployee>(`${this.url}/${id}`);
}

handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return (
    'Something bad happened; please try again later.');
}

}



