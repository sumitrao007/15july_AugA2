export class MyClass{
    private Firstname:string;
   public Lastname:string;

//    constructor(){
//        this.Firstname="Sumit";
//        this.Lastname="Raokhande";
//    }

   constructor(fname:string,lname:string){
        this.Firstname=fname;
        this.Lastname=lname;
   }

   display():void{
       console.log(`
       -------------------------------
       First name IS ${this.Firstname}
       Last name is ${this.Lastname}
       `);
   }

}

// var amyclass=new MyClass("Vijay","Chavan");

// amyclass.display()

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;





