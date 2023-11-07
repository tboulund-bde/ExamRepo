"use strict";
// :( deleted folders with interfaces, classes and modules because vite and manual ts do not like to export and import
// how the list will be printed out with text
class listResults {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading; // 'heading' is what will be shown as the heading, write the variable that calculates the converting
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // put at start 
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
// interface with classes for Cup
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
class Cup {
    // tell system what to expect with constructor
    constructor(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    format() {
        return `${this.amountLiquid} ${this.convertFromLiquid} = ${this.resultsLiquid} ${this.convertToLiquid}`;
    }
}
// interface with classes for Fluid ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
class FlOz {
    // tell system what to expect with constructor
    constructor(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    format() {
        return `${this.amountLiquid} ${this.convertFromLiquid} = ${this.resultsLiquid} ${this.convertToLiquid}`;
    }
}
// interface with classes for Ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
class Ounce {
    // tell system what to expect with constructor
    constructor(convertFromWeight, amountWeight, // make public so it is accessable to change the value
    convertToWeight, resultsWeight) {
        this.convertFromWeight = convertFromWeight;
        this.amountWeight = amountWeight;
        this.convertToWeight = convertToWeight;
        this.resultsWeight = resultsWeight;
    }
    // prints out what was the result of the conversion
    format() {
        return `${this.resultsWeight} ${this.convertToWeight}(s) = ${this.amountWeight} ${this.convertFromWeight}(s)`;
    }
}
// interface with classes for Pound
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
class Pound {
    // tell system what to expect with constructor
    constructor(convertFromWeight, amountWeight, // make public so it is accessable to change the value
    convertToWeight, resultsWeight) {
        this.convertFromWeight = convertFromWeight;
        this.amountWeight = amountWeight;
        this.convertToWeight = convertToWeight;
        this.resultsWeight = resultsWeight;
    }
    // prints out what was the result of the conversion
    format() {
        return `${this.resultsWeight} ${this.convertToWeight}(s) = ${this.amountWeight} ${this.convertFromWeight}(s)`;
    }
}
// interface with classes for Pint
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
class Pt {
    // tell system what to expect with constructor
    constructor(convertFromLiquid, amountLiquid, // make public so it is accessable to change the value
    convertToLiquid, resultsLiquid) {
        this.convertFromLiquid = convertFromLiquid;
        this.amountLiquid = amountLiquid;
        this.convertToLiquid = convertToLiquid;
        this.resultsLiquid = resultsLiquid;
    }
    // prints out what was the result of the conversion
    format() {
        return `${this.amountLiquid} ${this.convertFromLiquid} = ${this.resultsLiquid} ${this.convertToLiquid}`;
    }
}
// title of forms to show what you are converting from and to and what you can convert
// weight title
const unitOne = {
    type: "Weight",
    options: ["Pound", "Ounce"],
};
// liquid title
const unitTwo = {
    type: "Liquid",
    options: ["Fluid Ounce", "Cup", "Pint"],
};
// print unitOne out on the page
const unitWeight = document.querySelector('.unitWeight');
unitWeight.innerHTML = `${unitOne.type} <br> ${unitOne.options}`;
// print unitTwo out on the page
const unitLiquid = document.querySelector('.unitLiquid');
unitLiquid.innerHTML = `${unitTwo.type} <br> ${unitTwo.options}`;
// weight converter
// links to american to european converter
const formWeight = document.querySelector('.converter-weight');
// select
const convertFromWeight = document.querySelector('#convertFromWeight');
const convertToWeight = document.querySelector('#convertToWeight');
// inputs
const amountWeight = document.querySelector('#amountWeight');
// list results
const ulWeight = document.querySelector('ul');
const listWeight = new listResults(ulWeight);
// prints out the result of the convert and keeps the result in the list
const calculateConvertWeight = () => {
    // Store the static number of weights
    let poundToGram = 453.59237;
    let poundToKilogram = poundToGram / 1000;
    let ounceToGram = 28.3495;
    let ounceToKilogram = ounceToGram / 1000;
    let result;
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
formWeight.addEventListener('submit', (e) => {
    e.preventDefault();
    // store the convertings in a variable
    const resultsWeight = calculateConvertWeight();
    // Display the result with the converted amount and the value it was converted to in HTML
    const resultWeightElement = document.querySelector('.resultWeight');
    resultWeightElement.innerHTML = `Result: ${resultsWeight} ${convertToWeight.value}(s)`;
    // Display a paragraph with history result once a result has been calculated
    const resultWeightHistoryElement = document.querySelector('.resultWeightHistory');
    resultWeightHistoryElement.innerHTML = `Result history`;
    // display the history of the results
    let doc;
    if (convertFromWeight.value === 'pound') {
        doc = new Pound(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight);
    }
    else {
        doc = new Ounce(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight);
    }
    // write the list out
    listWeight.render(doc, convertFromWeight.value, 'end');
    console.log(doc);
});
// liquid converter
// links to american to european converter
const formLiquid = document.querySelector('.converter-liquid');
// select
const convertFromLiquid = document.querySelector('#convertFromLiquid');
const convertToLiquid = document.querySelector('#convertToLiquid');
// inputs
const amountLiquid = document.querySelector('#amountLiquid');
// list results in ul with a class of .result-list-liquid
const ulLiquid = document.querySelector('.result-list-liquid');
const listLiquid = new listResults(ulLiquid);
// prints out the result of the convert and keeps the result in the list
const calculateConvertLiquid = () => {
    // Store the static number of liquids
    let flOzToMl = 29.5735;
    let flOzToLiter = flOzToMl / 1000;
    let flOzToCentiliter = flOzToMl / 10;
    let flOzToDeciliter = flOzToMl / 100;
    let cupToMl = 236.58824;
    let cupToLiter = cupToMl / 1000;
    let cupToCentiliter = cupToMl / 10;
    let cupToDeciliter = cupToMl / 100;
    let ptToMl = 473.17648;
    let ptToLiter = ptToMl / 1000;
    let ptToCentiliter = ptToMl / 10;
    let ptToDeciliter = ptToMl / 100;
    let resultLiquid;
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
formLiquid.addEventListener('submit', (e) => {
    e.preventDefault();
    // store the convertings in a variable
    const resultsLiquid = calculateConvertLiquid();
    // Display the result with the converted amount and the value it was converted to in HTML
    const resultLiquidElement = document.querySelector('.resultLiquid');
    resultLiquidElement.innerHTML = `Result: ${resultsLiquid} ${convertToLiquid.value}`;
    // Display a paragraph with history result once a result has been calculated
    const resultLiquidHistoryElement = document.querySelector('.resultLiquidHistory');
    resultLiquidHistoryElement.innerHTML = `Result history`;
    // display the history of the results
    let docTwo;
    if (convertFromLiquid.value === 'flOz') {
        docTwo = new FlOz(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    else if (convertFromLiquid.value === 'cup') {
        docTwo = new Cup(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    else {
        docTwo = new Pt(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid);
    }
    // write the list out
    listLiquid.render(docTwo, convertFromLiquid.value, 'end');
    console.log(docTwo);
});
