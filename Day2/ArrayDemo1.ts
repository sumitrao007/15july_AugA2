var arr1=[1,2,3,4];

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log("---------------------------------");
arr1.forEach((element,i) => {
    console.log(`
    arr1[${i}]=${element}
    `);
});

var arr2:string[]=["Angular","React Js","Vue Js","MEAN Stack"];

arr2.forEach(myelement=>{
    console.log("Value of Arr2 is "+myelement);
}
);

var arr3:number[]=[1,2,3,4];

arr3.forEach(elemnet=>{
    console.log("Element square is "+(elemnet*elemnet));
});
