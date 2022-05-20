import { IAddress } from "./IAddress";

export interface IEmployee
{
     id? : number;
      name :  string ;
     age :number;
     designation : string ;
     salary : number;
     joinDate : string ;
     maritalStatus :  string ;
     imageUrl : string;
     empAddress: IAddress;
     

}