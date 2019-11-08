import { Shape } from "./shape";

export class Circle extends Shape
{
    radius:number;
    myarea:number;

    constructor(radius:number){
        super();
        this.radius=radius;
    }
    
    area(){
        this.myarea=3.14*this.radius*this.radius;
    }

    display(){
        console.log(`
        ------------------------------
                Circle area is 
                area is ${this.myarea}
        `)
    }


}