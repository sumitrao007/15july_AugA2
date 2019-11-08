"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(l, b) {
        var _this = _super.call(this) || this;
        _this.length = l;
        _this.breadth = b;
        return _this;
    }
    Rectangle.prototype.area = function () {
        this.rectarea = this.length * this.breadth;
    };
    Rectangle.prototype.display = function () {
        console.log("\n        -------------------------------------\n                Rectangle area is \n                Area is " + this.rectarea + "\n        ");
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.getBreadth = function () {
        return this.breadth;
    };
    Rectangle.prototype.setLength = function (l) {
        this.length = l;
    };
    Rectangle.prototype.setBreadth = function (b) {
        this.breadth = b;
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
