"use strict";
exports.__esModule = true;
var Department_1 = require("./Department");
var EmpDtails = /** @class */ (function () {
    function EmpDtails(fnmae, lname, company, salary, d) {
        this.Firstname = fnmae;
        this.Lastname = lname;
        this.company = company;
        this.salary = salary;
        this.dept = new Department_1.Department(d);
    }
    EmpDtails.prototype.display = function () {
        console.log("\n        ----------------------------\n        Display Information\n        First name " + this.Firstname + "\n        Last name " + this.Lastname + "\n        Company name " + this.company + "\n        Salary is " + this.salary + "\n        Department is " + this.dept.displayDept() + "\n        ");
    };
    return EmpDtails;
}());
exports.EmpDtails = EmpDtails;
