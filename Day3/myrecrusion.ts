//Recruc. is Function Call it self upto termination Condition

function myfact(a:number):number{
    if(a<=0){
        return 1;
    }else{
        return (a*myfact(a-1))
    }
}

console.log("Factorial is "+myfact(5));