"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pt = void 0;
// interface with classes for Pint
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Pt = /** @class */ (function () {
    // tell system what to expect with constructor
    function Pt(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    Pt.prototype.format = function () {
        return "".concat(this.amountLiquid, " ").concat(this.convertFromLiquid, " = ").concat(this.resultsLiquid, " ").concat(this.convertToLiquid);
    };
    return Pt;
}());
exports.Pt = Pt;
