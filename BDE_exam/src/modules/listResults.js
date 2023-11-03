"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listResults = void 0;
// how the list will be printed out with text
var listResults = /** @class */ (function () {
    function listResults(container) {
        this.container = container;
    }
    listResults.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading; // 'heading' is what will be shown as the heading, write the variable that calculates the converting
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // put at start 
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return listResults;
}());
exports.listResults = listResults;
