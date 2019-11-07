// var arr1=[1,2,3,4];
// var arr2:number[]=[1,2,3,4];

// var arr3:number[]=[];

// //Its work on LIFO = Last in Forst Out
// arr3.push(10);
// arr3.push(20);
// arr3.push(30);
// console.log("Array Data is "+arr3);

// var temp=arr3.pop();
// console.log("Poped Value is "+temp);
// console.log("Array Data is "+arr3);

// var arr4:number[]=[11,12,13,14,15];
// console.log("-----------------------------");
// arr4.splice(1,1);
// console.log("Array Data is "+arr4);
// arr4.splice(1,2);
// console.log("Array Data is "+arr4);
// console.log("-----------------------------");
// var arr5:number[]=[11,12,13,14,15];
// console.log("Array Data is "+arr5);
// arr5.splice(2);
// console.log("Array Data is "+arr5);

// arr5.splice(2,0,20,30,40);
// console.log("Array Data is "+arr5);
// arr5.splice(2,1,200);
// console.log("Array Data is "+arr5);
// var arr6:number[]=[20,30,40,50,60,70];
// console.log("-----------------------------");
// console.log("Array Data is "+arr6);
// arr6.splice(2,0,3,4,5);
// console.log("Array Data is "+arr6);

// console.log("Display Custom Array"+arr6.join(" "));
// console.log("Display Custom Array"+arr6.join(" @"));
// console.log("Display Custom Array"+arr6.join(""));
// console.log("Display Custom Array"+arr6.join());

var a1:string[]=["Angular","React Js","Vue Js","MEAN Stack"];
console.log(a1);

var a2:number[]=[1,2,3,4,5,6,7,8,9];
console.log("Array data is "+a2);
var temp=a2.slice(1,3);
console.log("Copied Data is "+temp);

var temp2=a2.slice(2);
console.log("Copied Data is "+temp2);

var a3:number[]=[1,2,3,4,5];

var temp3=a3.map((value)=>{
    return (value*value);
});
console.log("------------------------");
console.log("Array data is "+a3);
console.log("Square Value is "+temp3.join("  "));

var temp4=a3.map((value,index)=>{
    if(index==1 || index==2){
        return (value*value);
    }
});

console.log("------------------------");
console.log("Array data is "+a3);
console.log("Specific index Square Value is "+temp4.join("  "));

var temp5=a3.slice(1,3).map((value)=>{
    return (value*value);
});

console.log("------------------------");
console.log("Array data is "+a3);
console.log("Using Slice Square Value is "+temp5.join("  "));

function getsquare(a:number):number{
   let temp:number=0;
   temp=a*a;
    return (temp);
}

var temp6=a3.map(getsquare);
console.log("------------------------");
console.log("Array data is "+a3);
console.log("Using Custom Function Square Value is "+temp6.join("  "));

//tuple
var a4=[12,"Sumit",true,5];
console.log("Tuple Array is "+a4.join("  "));

var a5=[];

a5.push(12);
a5.push("Sumit");
a5.push(false);
console.log(a5);

//Rest parameter Function

function restPara(...num:number[]){

    let temp = num.map(value=>{
        return (value+value);
    });
    console.log("--------------------------------------");
    console.log("Addition of Element by Element is "+temp.join(" "));

}
restPara(10,20);
restPara(10,20,30,40,50,60);



