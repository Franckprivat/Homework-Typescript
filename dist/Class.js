// function reverse<T>(arr: readonly T[]): readonly T[] {
//     return [...arr].reverse();
// }
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
// class A {
//     constructor(
//         public a: number
//     ){
//     }
// }
// const aInstance = new A(3);
// // aInstance.log()
// console.log(aInstance.a);
// class B extends A {
//     log() {
//         console.log(this.b);
//     }
// }
// const bInstance = new B();
// console.log(bInstance);
// class C {
//     private c = 9
// }
// const cInstance = new C();
// console.log(cInstance['c']);
var Collection = /** @class */ (function () {
    function Collection(items) {
        this.items = items;
    }
    Collection.prototype.add = function (item) {
        this.items.push(item);
        return this;
    };
    Collection.prototype.first = function () {
        return this.items[0] || null;
    };
    return Collection;
}());
var Subscriber = /** @class */ (function () {
    function Subscriber() {
    }
    Subscriber.prototype.on = function (name, cb) {
    };
    return Subscriber;
}());
var a = new Collection([1, "aze", 2]);
var c = a.add(3);
var b = a.first();
var Geometry = /** @class */ (function () {
    function Geometry() {
        this.x = 0;
        this.y = 0;
    }
    return Geometry;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 2;
        _this.y = 2;
        return _this;
    }
    Triangle.prototype.surface = function () {
        return 3;
    };
    return Triangle;
}(Geometry));
