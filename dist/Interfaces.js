"use strict";
// interface Point {
//     x: number
// }
Object.defineProperty(exports, "__esModule", { value: true });
var TwoDimensionPoint = /** @class */ (function () {
    function TwoDimensionPoint() {
        this.x = 0;
        this.y = 0;
    }
    return TwoDimensionPoint;
}());
function Draw(p) {
}
Draw(new TwoDimensionPoint());
// ## Type
// ````ts 
// type NAME = ...
// ```
// - Peut utiliser les types primaires;
// - Ne peut être redéfini;
// ## Interface
// ```ts
// interface NAME {}
// - Peut être étendu;
// -Peut être Implémenté;
