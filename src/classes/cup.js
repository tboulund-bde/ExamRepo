"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cup = void 0;
// interface with classes for Cup
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
var Cup = /** @class */ (function () {
    // tell system what to expect with constructor
    function Cup(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    Cup.prototype.format = function () {
        return "".concat(this.amountLiquid, " ").concat(this.convertFromLiquid, " = ").concat(this.resultsLiquid, " ").concat(this.convertToLiquid);
    };
    return Cup;
}());
exports.Cup = Cup;
