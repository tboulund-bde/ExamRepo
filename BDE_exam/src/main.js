"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/style.css");
// modules import
var listResults_js_1 = require("./modules/listResults.js");
// classes import
var ounce_js_1 = require("./classes/ounce.js");
var pound_js_1 = require("./classes/pound.js");
var flOz_js_1 = require("./classes/flOz.js");
var cup_js_1 = require("./classes/cup.js");
var pt_js_1 = require("./classes/pt.js");
// title of forms to show what you are converting from and to and what you can convert
// weight title
var unitOne = {
    type: "Weight",
    options: ["Pound", "Ounce"],
};
// liquid title
var unitTwo = {
    type: "Liquid",
    options: ["Fluid Ounce", "Cup", "Pint"],
};
// print unitOne out on the page
var unitWeight = document.querySelector('.unitWeight');
unitWeight.innerHTML = "".concat(unitOne.type, " <br> ").concat(unitOne.options);
// print unitTwo out on the page
var unitLiquid = document.querySelector('.unitLiquid');
unitLiquid.innerHTML = "".concat(unitTwo.type, " <br> ").concat(unitTwo.options);
// weight converter
// links to american to european converter
var formWeight = document.querySelector('.converter-weight');
// select
var convertFromWeight = document.querySelector('#convertFromWeight');
var convertToWeight = document.querySelector('#convertToWeight');
// inputs
var amountWeight = document.querySelector('#amountWeight');
// list results
var ulWeight = document.querySelector('ul');
var listWeight = new listResults_js_1.listResults(ulWeight);
// prints out the result of the convert and keeps the result in the list
var calculateConvertWeight = function () {
    // Store the static number of weights
    var poundToGram = 453.59237;
    var poundToKilogram = poundToGram / 1000;
    var ounceToGram = 28.3495;
    var ounceToKilogram = ounceToGram / 1000;
    var result;
    // tell it which calculation to use
    // pound
    if (convertFromWeight.value === 'pound' && convertToWeight.value === 'gram') {
        result = amountWeight.valueAsNumber * poundToGram;
    }
    else if (convertFromWeight.value === 'pound' && convertToWeight.value === 'kilogram') {
        result = amountWeight.valueAsNumber * poundToKilogram;
    }
    // ounce
    else if (convertFromWeight.value === 'ounce' && convertToWeight.value === 'gram') {
        result = amountWeight.valueAsNumber * ounceToGram;
    }
    else {
        result = amountWeight.valueAsNumber * ounceToKilogram;
    }
    return result;
};
// print result out below the form
formWeight.addEventListener('submit', function (e) {
    e.preventDefault();
    // store the convertings in a variable
    var resultsWeight = calculateConvertWeight();
    // Display the result with the converted amount and the value it was converted to in HTML
    var resultWeightElement = document.querySelector('.resultWeight');
    resultWeightElement.innerHTML = "Result: ".concat(resultsWeight, " ").concat(convertToWeight.value, "(s)");
    // Display a paragraph with history result once a result has been calculated
    var resultWeightHistoryElement = document.querySelector('.resultWeightHistory');
    resultWeightHistoryElement.innerHTML = "Result history";
    // display the history of the results
    var doc;
    if (convertFromWeight.value === 'pound') {
        doc = new pound_js_1.Pound(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight);
    }
    else {
        doc = new ounce_js_1.Ounce(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight);
    }
    // write the list out
    listWeight.render(doc, convertFromWeight.value, 'end');
    console.log(doc);
});
// liquid converter
// links to american to european converter
var formLiquid = document.querySelector('.converter-liquid');
// select
var convertFromLiquid = document.querySelector('#convertFromLiquid');
var convertToLiquid = document.querySelector('#convertToLiquid');
// inputs
var amountLiquid = document.querySelector('#amountLiquid');
// list results in ul with a class of .result-list-liquid
var ulLiquid = document.querySelector('.result-list-liquid');
var listLiquid = new listResults_js_1.listResults(ulLiquid);
// prints out the result of the convert and keeps the result in the list
var calculateConvertLiquid = function () {
    // Store the static number of liquids
    var flOzToMl = 29.5735;
    var flOzToLiter = flOzToMl / 1000;
    var flOzToCentiliter = flOzToMl / 10;
    var flOzToDeciliter = flOzToMl / 100;
    var cupToMl = 236.58824;
    var cupToLiter = cupToMl / 1000;
    var cupToCentiliter = cupToMl / 10;
    var cupToDeciliter = cupToMl / 100;
    var ptToMl = 473.17648;
    var ptToLiter = ptToMl / 1000;
    var ptToCentiliter = ptToMl / 10;
    var ptToDeciliter = ptToMl / 100;
    var resultLiquid;
    // tell it which calculation to use
    //fl oz
    if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'ml') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToMl;
    }
    else if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'l') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToLiter;
    }
    else if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'cl') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToCentiliter;
    }
    else if (convertFromLiquid.value === 'flOz' && convertToLiquid.value === 'dl') {
        resultLiquid = amountLiquid.valueAsNumber * flOzToDeciliter;
    }
    // cup
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'ml') {
        resultLiquid = amountLiquid.valueAsNumber * cupToMl;
    }
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'l') {
        resultLiquid = amountLiquid.valueAsNumber * cupToLiter;
    }
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'cl') {
        resultLiquid = amountLiquid.valueAsNumber * cupToCentiliter;
    }
    else if (convertFromLiquid.value === 'cup' && convertToLiquid.value === 'dl') {
        resultLiquid = amountLiquid.valueAsNumber * cupToDeciliter;
    }
    // pint
    else if (convertFromLiquid.value === 'pt' && convertToLiquid.value === 'ml') {
        resultLiquid = amountLiquid.valueAsNumber * ptToMl;
    }
    else if (convertFromLiquid.value === 'pt' && convertToLiquid.value === 'l') {
        resultLiquid = amountLiquid.valueAsNumber * ptToLiter;
    }
    else if (convertFromLiquid.value === 'pt' && convertToLiquid.value === 'dl') {
        resultLiquid = amountLiquid.valueAsNumber * ptToCentiliter;
    }
    else {
        resultLiquid = amountLiquid.valueAsNumber * ptToDeciliter;
    }
    return resultLiquid;
};
// print result out below the form
formLiquid.addEventListener('submit', function (e) {
    e.preventDefault();
    // store the convertings in a variable
    var resultsLiquid = calculateConvertLiquid();
    // Display the result with the converted amount and the value it was converted to in HTML
    var resultLiquidElement = document.querySelector('.resultLiquid');
    resultLiquidElement.innerHTML = "Result: ".concat(resultsLiquid, " ").concat(convertToLiquid.value);
    // Display a paragraph with history result once a result has been calculated
    var resultLiquidHistoryElement = document.querySelector('.resultLiquidHistory');
    resultLiquidHistoryElement.innerHTML = "Result history";
    // display the history of the results
    var docTwo;
    if (convertFromLiquid.value === 'flOz') {
        docTwo = new flOz_js_1.FlOz(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    else if (convertFromLiquid.value === 'cup') {
        docTwo = new cup_js_1.Cup(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    else {
        docTwo = new pt_js_1.Pt(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    // write the list out
    listLiquid.render(docTwo, convertFromLiquid.value, 'end');
    console.log(docTwo);
});
