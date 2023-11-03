import '../src/style.css'

// modules import
import { listResults } from './modules/listResults.js'

// classes import
import { Ounce } from './classes/ounce.js';
import { Pound } from './classes/pound.js';
import { FlOz } from './classes/flOz.js';
import { Cup } from './classes/cup.js';
import { Pt } from './classes/pt.js';

// interfaces import
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Unit } from './interfaces/unit.js';



// title of forms to show what you are converting from and to and what you can convert
// weight title
const unitOne: Unit = {
  type: "Weight",
  options: ["Pound", "Ounce"],
}

// liquid title
const unitTwo: Unit = {
  type: "Liquid",
  options: ["Fluid Ounce", "Cup", "Pint"],
}

// print unitOne out on the page
const unitWeight = document.querySelector('.unitWeight') as HTMLElement;
unitWeight.innerHTML = `${unitOne.type} <br> ${unitOne.options}`;

// print unitTwo out on the page
const unitLiquid = document.querySelector('.unitLiquid') as HTMLElement;
unitLiquid.innerHTML = `${unitTwo.type} <br> ${unitTwo.options}`;




// weight converter

// links to american to european converter
const formWeight = document.querySelector('.converter-weight') as HTMLFormElement;

// select
const convertFromWeight = document.querySelector('#convertFromWeight') as HTMLSelectElement;
const convertToWeight = document.querySelector('#convertToWeight') as HTMLSelectElement;

// inputs
const amountWeight = document.querySelector('#amountWeight') as HTMLInputElement;

// list results
const ulWeight = document.querySelector('ul')!;
const listWeight = new listResults(ulWeight);


// prints out the result of the convert and keeps the result in the list
const calculateConvertWeight = () => {

  // Store the static number of weights
  let poundToGram:number = 453.59237;
  let poundToKilogram:number = poundToGram / 1000;

  let ounceToGram:number = 28.3495;
  let ounceToKilogram:number = ounceToGram / 1000;

  let result: number;

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
}



// print result out below the form
formWeight.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // store the convertings in a variable
  const resultsWeight = calculateConvertWeight();


  // Display the result with the converted amount and the value it was converted to in HTML
  const resultWeightElement = document.querySelector('.resultWeight') as HTMLElement;
  resultWeightElement.innerHTML = `Result: ${resultsWeight} ${convertToWeight.value}(s)`;

  // Display a paragraph with history result once a result has been calculated
  const resultWeightHistoryElement = document.querySelector('.resultWeightHistory') as HTMLElement;
  resultWeightHistoryElement.innerHTML = `Result history`;


  // display the history of the results
  let doc: HasFormatter;
  if (convertFromWeight.value === 'pound') {
    doc = new Pound(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight)
  } else {
    doc = new Ounce(convertFromWeight.value, amountWeight.valueAsNumber, convertToWeight.value, resultsWeight)
  }

  
  // write the list out
  listWeight.render(doc, convertFromWeight.value, 'end')


  
  console.log(doc);
})





// liquid converter

// links to american to european converter
const formLiquid = document.querySelector('.converter-liquid') as HTMLFormElement;

// select
const convertFromLiquid = document.querySelector('#convertFromLiquid') as HTMLSelectElement;
const convertToLiquid = document.querySelector('#convertToLiquid') as HTMLSelectElement;

// inputs
const amountLiquid = document.querySelector('#amountLiquid') as HTMLInputElement;

// list results in ul with a class of .result-list-liquid
const ulLiquid = document.querySelector('.result-list-liquid') as HTMLUListElement;
const listLiquid = new listResults(ulLiquid);


// prints out the result of the convert and keeps the result in the list
const calculateConvertLiquid = () => {

  // Store the static number of liquids
  let flOzToMl:number = 29.5735;
  let flOzToLiter:number = flOzToMl / 1000;
  let flOzToCentiliter:number = flOzToMl / 10;
  let flOzToDeciliter:number = flOzToMl / 100;

  let cupToMl:number = 236.58824;
  let cupToLiter:number = cupToMl / 1000;
  let cupToCentiliter:number = cupToMl / 10;
  let cupToDeciliter:number = cupToMl / 100;

  let ptToMl:number = 473.17648;
  let ptToLiter:number = ptToMl / 1000;
  let ptToCentiliter:number = ptToMl / 10;
  let ptToDeciliter:number = ptToMl / 100;

  let resultLiquid: number;


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
}



// print result out below the form
formLiquid.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // store the convertings in a variable
  const resultsLiquid = calculateConvertLiquid();


  // Display the result with the converted amount and the value it was converted to in HTML
  const resultLiquidElement = document.querySelector('.resultLiquid') as HTMLElement;
  resultLiquidElement.innerHTML = `Result: ${resultsLiquid} ${convertToLiquid.value}`;

  // Display a paragraph with history result once a result has been calculated
  const resultLiquidHistoryElement = document.querySelector('.resultLiquidHistory') as HTMLElement;
  resultLiquidHistoryElement.innerHTML = `Result history`;


  // display the history of the results
  let docTwo: HasFormatter;
  if (convertFromLiquid.value === 'flOz') {
    docTwo = new FlOz(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid)
  } else if (convertFromLiquid.value === 'cup') {
    docTwo = new Cup(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid)
  } else {
    docTwo = new Pt(convertFromLiquid.value, amountLiquid.valueAsNumber, convertToLiquid.value, resultsLiquid)
  }

  
  // write the list out
  listLiquid.render(docTwo, convertFromLiquid.value, 'end')


  
  console.log(docTwo);
})
