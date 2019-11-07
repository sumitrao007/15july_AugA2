//Key & Value Format
var student={
    firsname:"Sumit",
    lastname:"Raokhande",
    rollno:1,
    pass:true
};

console.log(student.firsname);
console.log(student.rollno);

var empolyee={
    firsname:"Sumit",
    lastname:"Raokhande",
    salary:50000,
    fullname:(fnmae,lname)=>{
        return (fnmae+" "+lname);
    }
};

console.log(`
-----------------------------------
Full Name is ${empolyee.fullname(empolyee.firsname,empolyee.lastname)}
`);

//Array Of Object
var empolyee1=[
    {
        firsname:"Nitin",
        lastname:"Tawde",
        company:"Google",
        salary:100000
    },
    {
        firsname:"Rajan",
        lastname:"Deshmukh",
        company:"IBM",
        salary:100000
    },
    {
        firsname:"Bhalchandra",
        lastname:"Patil",
        company:"Infosys",
        salary:100000
    }
];

console.log("Data is "+empolyee1[0].firsname);

for(let i=0;i<empolyee1.length;i++){
    console.log(`
    ----------------------------------------
    Fname is  ${empolyee1[i].firsname}
    last name is ${empolyee1[i].lastname}
    comapny is ${empolyee1[i].company}
    Salary is ${empolyee1[i].salary}
    -------------------------------------------
    `);
}