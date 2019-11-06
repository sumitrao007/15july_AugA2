
// var temp=function (){
//     console.log("Hopes So U r Enjoy My Lecture!!!!!");
// }

// // temp();
// // temp();
// //Arrow Function/fat arrow Function

// var temp2=()=>{
//     console.log("Fat Arrow Function!!!!");
// }

// temp2();

// var temp3=(a:number,b:number)=>{
//     console.log(`
//     ---------------------------
//     Addition is ${a+b}
//     `);
// }

// temp3(2,3);

// var temp4=(a:number,b:number)=>{
//     return (a+b);
// }

// console.log(temp4(6,6));

// var temp5=(a,b):number=>{
//     return (a+b);
// }

// console.log(`
// ----------------------------
// Function With Argument With return Value ${temp5(5,5)}
// `);

//Optional parameter Function

// function add(a:number,b?:number){

//     console.log("value of a "+a);
//     console.log("value of b "+b);
//     console.log("Addition is  "+(a+b));
// }

// add(1,2);
// console.log("--------------------------------");
// add(1);

// function add1(a:number,b?:string){

//     console.log("value of a "+a);
//     console.log("value of b "+b);
//     console.log("Addition is  "+(a+b));
// }

// console.log("--------------------------------");
// add1(1,"Sumit Raokhande");

// function add2(a:string,b?:string){
//     console.log("value of a "+a);
//     console.log("value of b "+b);
//     console.log("Addition is  "+(a+b));
// }
// console.log("--------------------------------");
// add2("Sumit");

// function add3(a?:number,b?:number){
//     console.log("value of a "+a);
//     console.log("value of b "+b);
//     console.log("Addition is  "+(a+b));
// }

// add3(1,2);
// console.log("--------------------------------");
// add3(1);
// console.log("--------------------------------");
// add3();

// function add4(a:number,b?:number,c?:number){
//     console.log("Value of A is "+a);
//     console.log("Value of b is "+b);
//     console.log("Value of c is "+c);
// }
// console.log("--------------------------------");
// add4(1);

// Default Parameter Function

function add5(a:number,b:number=10){
    console.log("--------------------------------");
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Addition Is "+(a+b));
}

add5(1,2);
add5(1);

function add6(a?:number,b?:string){
console.log("Value of A is "+a);
console.log("Value of b is "+b);

}

add6();

//Function Constructor


var fun=new Function("a","b","console.log(a+b)");

fun(70,70);



