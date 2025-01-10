var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverse(arr) {
    return __spreadArray([], arr, true).reverse();
}
var A = /** @class */ (function () {
    function A() {
        this.a = 3;
        this.b = 5;
    }
    A.prototype.log = function () {
        console.log(this.a);
    };
    return A;
}());
var aInstance = new A();
aInstance.log();
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.log = function () {
        console.log(this.b);
    };
    return B;
}(A));
var bInstance = new B();
bInstance.log();
var C = /** @class */ (function () {
    function C() {
        this.c = 9;
    }
    return C;
}());
var cInstance = new C();
console.log(cInstance.c);
