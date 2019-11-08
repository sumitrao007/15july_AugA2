"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    //    constructor(){
    //        this.Firstname="Sumit";
    //        this.Lastname="Raokhande";
    //    }
    function MyClass(fname, lname) {
        this.Firstname = fname;
        this.Lastname = lname;
    }
    MyClass.prototype.display = function () {
        console.log("\n       -------------------------------\n       First name IS " + this.Firstname + "\n       Last name is " + this.Lastname + "\n       ");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
// var amyclass=new MyClass("Vijay","Chavan");
// amyclass.display()
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
