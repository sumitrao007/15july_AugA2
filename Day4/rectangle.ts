import { Shape } from "./shape";

export class Rectangle extends Shape
{
   private length:number;
   private breadth:number;
   private rectarea:number;

    constructor(l:number,b:number){
        super();
        this.length=l;
        this.breadth=b;

    }

    area(){
        this.rectarea=this.length*this.breadth;
    }
    display(){
        console.log(`
        -------------------------------------
                Rectangle area is 
                Area is ${this.rectarea}
        `);
    }

    getLength():number{
        return this.length;
    }

    getBreadth():number{
        return this.breadth;
    }
    setLength(l:number):void{
        this.length=l;
    }
    setBreadth(b:number){
        this.breadth=b;
    }


}