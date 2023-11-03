"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ounce = void 0;
// interface with classes for Ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Ounce = /** @class */ (function () {
    // tell system what to expect with constructor
    function Ounce(convertFromWeight, amountWeight, // make public so it is accessable to change the value
    convertToWeight, resultsWeight) {
        this.convertFromWeight = convertFromWeight;
        this.amountWeight = amountWeight;
        this.convertToWeight = convertToWeight;
        this.resultsWeight = resultsWeight;
    }
    // prints out what was the result of the conversion
    Ounce.prototype.format = function () {
        return "".concat(this.resultsWeight, " ").concat(this.convertToWeight, "(s) = ").concat(this.amountWeight, " ").concat(this.convertFromWeight, "(s)");
    };
    return Ounce;
}());
exports.Ounce = Ounce;
