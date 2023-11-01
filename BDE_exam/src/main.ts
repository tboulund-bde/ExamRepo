import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)






// Interface about american lengths
type americanLengths = {
  inch: number,
  foot: number,
  yard: number,
  mile: number,
}





interface AmericanLengths {
  inch: number,
  foot: number,
  yard: number,
  mile: number,
}

const americanLengths: AmericanLengths = {
  inch: 2.54,
  foot: 12,
  yard: 36,
  mile: 63360,
}

console.log(americanLengths);





// Calculate from inches to cm
// Store the static number of an inch 
let inch:number = 2.54;
let foot:number = 12;
let yard:number = foot * 3;
let mile:number = foot * 5.280;



// Function to calculate inches to cm
function calculateInchesToCm (inches: number) {
  return inches * inch;
}

// console log to check the result
console.log(calculateInchesToCm (5), "cm");



// Calculate from cm to inches
// Store the static number of a cm
let cmToInch:number = 0.393701;

// Function to calculate cm to inches
function calculateCmToInches (cms: number) {
  return cms * cmToInch;
}

// console log to check the result
console.log(calculateCmToInches (5), "inches");











interface Americanweights {
  pound: number,
  ounce: number,
  ton: number,
}

const americanweights: Americanweights = {
  pound: 2.54,
  ounce: 12,
  ton: 36,
}

console.log("American weights", americanweights);

// Store the static number of weights 
let pound:number = 2.54;
let ounce:number = 12;
let ton:number = foot * 3;




interface Europeanweights {
  gram: number,
  kilogram: number,
  metricTon: number,
}

const europeanweights: Europeanweights = {
  gram: 2.54,
  kilogram: 12,
  metricTon: 36,
}

console.log("European weights", europeanweights);







// from pound to european weights
// Store the static number of weights from pound to european weights
let poundToGram:number = 453.59237;
let poundToKilogram:number = poundToGram / 1000;
let poundToMetricTon:number = poundToGram / 1000000;


// Function to calculate pound to gram
function calculatePoundToGram (pound: number) {
  return pound * poundToGram;
}

console.log(calculatePoundToGram (5), "grams");



// function to calculate pound to kilogram
function calculatePoundToKilogram (pound: number) {
  return pound * poundToKilogram;
}

console.log(calculatePoundToKilogram (5), "kilograms");


// function to calculate pound to metric ton
function calculatePoundToMetricTon (pound: number) {
  return pound * poundToMetricTon;
}

console.log(calculatePoundToMetricTon (5), "metric tons");




// from ounce to european weights
// Store the static number of weights from ounce to european weights
let ounceToGram:number = 28.3495;
let ounceToKilogram:number = ounceToGram / 1000;
let ounceToMetricTon:number = ounceToGram / 1000000;


// Function to calculate ounce to gram
function calculateOunceToGram (ounce: number) {
  return ounce * ounceToGram;
}

console.log(calculateOunceToGram (5), "grams");



// function to calculate ounce to kilogram
function calculateOunceToKilogram (ounce: number) {
  return ounce * ounceToKilogram;
}

console.log(calculateOunceToKilogram (5), "kilograms");


// function to calculate ounce to metric ton
function calculateOunceToMetricTon (ounce: number) {
  return ounce * ounceToMetricTon;
}

console.log(calculateOunceToMetricTon (5), "metric tons");




// from ton to european weights
// Store the static number of weights from ton to european weights
let tonToGram:number = 907184.74;
let tonToKilogram:number = tonToGram / 1000;
let tonToMetricTon:number = tonToGram / 1000000;


// Function to calculate ounce to gram
function calculateTonToGram (ton: number) {
  return ton * tonToGram;
}

console.log(calculateTonToGram (5), "grams");



// function to calculate ounce to kilogram
function calculateTonToKilogram (ton: number) {
  return ton * tonToKilogram;
}

console.log(calculateTonToKilogram (5), "kilograms");


// function to calculate ounce to metric ton
function calculateTonToMetricTon (ton: number) {
  return ton * tonToMetricTon;
}

console.log(calculateTonToMetricTon (5), "metric tons");






// from gram to american weights
// Store the static number of weights from gram to american weights
let gramToPound:number = 453.59237;
let gramToOunce:number = gramToPound / 16;
let gramToTon:number = 0.0005;


// Function to calculate gram to pound
function calculateGramToPound (gram: number) {
  return gram / gramToPound;
}

console.log(calculateGramToPound (5), "gram to pounds");



// function to calculate gram to ounce
function calculateGramToOunce (ton: number) {
  return ton / gramToOunce;
}

console.log(calculateGramToOunce (5), "gram to ounces");


// function to calculate ounce to metric ton
function calculateGramToTon(gram: number) {
  return gram * gramToTon;
}

console.log(calculateGramToTon (5), "gram to tons");







// from kilogram to american weights
// Store the static number of weights from kilogram to american weights
let kilogramToPound:number = 453.59237;
let kilogramToOunce:number = kilogramToPound / 16;
let kilogramToTon:number = 0.0005;


// Function to calculate kilograms to pound
function calculateKilogramToPound (kilogram: number) {
  return kilogram / kilogramToPound;
}

console.log(calculateKilogramToPound (5), "kilograms to pounds");



// function to calculate kilograms to ounce
function calculateKilogramToOunce (kilogram: number) {
  return kilogram / kilogramToOunce;
}

console.log(calculateKilogramToOunce (5), "kilograms to ounces");


// function to calculate kilograms to metric ton
function calculateKilogramToTon(kilogram: number) {
  return kilogram * kilogramToTon;
}

console.log(calculateKilogramToTon (5), "kilograms to tons");







// from metric ton to american weights
// Store the static number of weights from metric ton to american weights
let metricTonToPound:number = 453.59237;
let metricTonToOunce:number = metricTonToPound / 16;
let metricTonToTon:number = 0.0005;


// Function to calculate metric ton to pound
function calculateMetricTonToPound (metricTon: number) {
  return metricTon / metricTonToPound;
}

console.log(calculateMetricTonToPound (5), "metric ton to pounds");



// function to calculate metric ton to ounce
function calculateMetricTonToOunce (metricTon: number) {
  return metricTon / metricTonToOunce;
}

console.log(calculateMetricTonToOunce (5), "metric ton to ounces");


// function to calculate metric ton to metric ton
function calculateMetricTonToTon(metricTon: number) {
  return metricTon * metricTonToTon;
}

console.log(calculateMetricTonToTon (5), "metric ton to tons");
