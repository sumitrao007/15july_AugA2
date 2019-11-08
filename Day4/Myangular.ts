class myAngular{

    constructor(private firstname:string,private lastname:string){

      }

      setData(fname:string,lname:string){
          this.firstname=fname;
          this.lastname=lname;
      }
      

      Display(){
          console.log(`
          -----------------------------
          Display Purpose
          First name is ${this.firstname}
          last name is ${this.lastname}
          `);
      }

}

var aMyangular=new myAngular("Sumit","Hefshine PVT LTD");
aMyangular.Display();
aMyangular.setData("Kiran","Raokhande");
aMyangular.Display();