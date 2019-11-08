import { Empolyee } from "./Empolyee";
import { Department } from "./Department";

export class EmpDtails implements Empolyee
{
    Firstname: string;   
     Lastname: string;
    company: string;
    dept:Department;
    salary:number;

    constructor(fnmae:string,lname:string,company:string,salary:number,d:string){
        
        this.Firstname=fnmae;
        this.Lastname=lname;
        this.company=company;
        this.salary=salary;        
        this.dept=new Department(d);    
    }


    display(): void {
        console.log(`
        ----------------------------
        Display Information
        First name ${this.Firstname}
        Last name ${this.Lastname}
        Company name ${this.company}
        Salary is ${this.salary}
        Department is ${this.dept.displayDept()}
        `);
    }


}