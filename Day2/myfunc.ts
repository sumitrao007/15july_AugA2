

function add(){
 console.log(5+5);
}

add();

function mul(a,b){
  
    let res=a*b;
    console.log(`
    -----------------------
    Multiplication is ${res}
    `);
}

mul(10,20);

function Mul():number {
    return (5*6);
}

var res1=Mul();
console.log(`
----------------
Function With Return ${res1}
`);

console.log(Mul());
console.log(`
------------------------
Function with Return 2 ${Mul()}

`);

function Mul1(){
    return (5*9);
}

console.log(Mul1());

function Mul2(){
    return ((5*9)+" Multiplication");
}

console.log(Mul2());

function Mul3(){
    return ((5*9)+ 5);
}

console.log(Mul3());

function Mul4(){
    return ((5*9) + "Multiplication "+(5+5));
}

console.log(Mul4());

function Mul5(){
    return ((5*9) + "Multiplication "+5+5);
}

console.log(Mul5());

// function Mul6(){
//     return ((5*9) + (true) +5+5);
// }

// console.log(Mul5());

function Mul6(){
    return (5*9 + "Multiplication "+5+5);
}

console.log(Mul6());

function Mul7(){
    return (5+9 + "Multiplication "+5+6);
}

console.log(Mul7());

function Mul8(){
    return ("Hello ABB Bus Karo"+5+9 + "Multiplication "+5+6);
}

console.log(Mul8());

function mul3(a:number,b:number):number {

    return (a*b);
}

console.log(`
--------------------
Multiplication Is ${mul3(2,2)}
`);
