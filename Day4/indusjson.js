var jsonobj = {
    status: "success1",
    data: [
        {
            firstname: "Sumit",
            lastname: "Raokhande",
            id: 1
        },
        {
            firstname: "Kiran",
            lastname: "Raokhande",
            id: 2
        },
        {
            firstname: "spruha",
            lastname: "Raokhande",
            id: 3
        },
    ],
    error: "error",
    data1: {
        listcount: 12,
        available: 10
    }
};
var temp = jsonobj.status;
console.log("Value of Status" + temp);
if (temp === "success") {
    console.log("U r in IF loop.....");
    console.log("Data is  " + jsonobj.data[0].firstname);
    for (var i = 0; i < jsonobj.data.length; i++) {
        console.log("\n        -----------------------------------\n        First Name is " + jsonobj.data[i].firstname + "\n        Last name is  " + jsonobj.data[i].lastname + "\n        Id Is         " + jsonobj.data[i].id + "\n        ------------------------------------\n        ");
    }
    console.log("Data is " + jsonobj.data1.listcount);
}
else if (jsonobj.error === "error") {
    console.log("Error is There!!!!!");
}
