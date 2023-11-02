import './style.css'
import { listResults } from './modules/listResults.js'
import { Ounce } from './classes/ounce.js';
import { Pound } from './classes/pound.js';
import { FlOz } from './classes/flOz.js';
import { Cup } from './classes/cup.js';
import { Pt } from './classes/pt.js';
import { HasFormatter } from './modules/HasFormatter.js';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="title-subheading">
      <h1>Americans being American</h1>
      <p>Ever wanted to bake a cake and the recipe is written in the “wrong” unit? We do! And that is why we created this unit converter calculator.</p>
    </div>
    
    <h2>Weight</h2>
    <form class="converter-weight">
        <div class="field">
          <label>What do you want to convert from:</label>
          <select id="convertFrom">
            <option value="pound">Pound</option>
            <option value="ounce">Ounce</option>
          </select>
        </div> 

        <div class="field">
          <label>Amount:</label>
          <input type="number" id="amount">
        </div>

      <div class="field">
        <label>What do you want to convert to:</label>
        <select id="convertTo">
          <option value="gram">Gram</option>
          <option value="kilogram">Kilogram</option>
        </select>
      </div>   
      
      <button id="convertBtn">Convert my choices</button>

      <ul class="result-list">
        <p class="result"></p>
        <p class="resultHistory"></p>
      </ul>

    </form>


    <h2>Liquid</h2>
    <form class="converter-liquid">
        <div class="field">
          <label>What do you want to convert from:</label>
          <select id="convertFromLiquid">
            <option value="flOz">Fluid Ounce</option>
            <option value="cup">Cup</option>
            <option value="pt">Pint</option>
          </select>
        </div> 

        <div class="field">
          <label>Amount:</label>
          <input type="number" id="amountLiquid">
        </div>

      <div class="field">
        <label>What do you want to convert to:</label>
        <select id="convertToLiquid">
          <option value="ml">Milliliter</option>
          <option value="l">Liter</option>
          <option value="cl">Centiliter</option>
          <option value="dl">Deciliter</option>
        </select>
      </div>   
      
      <button id="convertBtn">Convert my choices</button>

      <ul class="result-list-liquid">
        <p class="resultLiquid"></p>
        <p class="resultLiquidHistory"></p>
      </ul>

    </form>


  </div>
`



// interface
// this is sort of a template that is reusable
interface Measure {
  convertFrom: string;
  amount: number;
  convertTo: string;
}


const measureOne: Measure = {
  convertFrom: "Pound",
  amount: 3,
  convertTo: "Gram",
}

const measureTwo: Measure = {
  convertFrom: "Ounce",
  amount: 4,
  convertTo: "Kilogram",
}

console.log(measureOne, measureTwo);







// weight converter

// links to american to european converter
const formWeight = document.querySelector('.converter-weight') as HTMLFormElement;

// select
const convertFrom = document.querySelector('#convertFrom') as HTMLSelectElement;
const convertTo = document.querySelector('#convertTo') as HTMLSelectElement;

// inputs
const amount = document.querySelector('#amount') as HTMLInputElement;

// list results
const ul = document.querySelector('ul')!;
const list = new listResults(ul);


// prints out the result of the convert and keeps the result in the list
const calculateConvert = () => {

  // Store the static number of weights
  let poundToGram:number = 453.59237;
  let poundToKilogram:number = poundToGram / 1000;

  let ounceToGram:number = 28.3495;
  let ounceToKilogram:number = ounceToGram / 1000;

  let result: number;

  // tell it which calculation to use
  // pound
  if (convertFrom.value === 'pound' && convertTo.value === 'gram') {
    result = amount.valueAsNumber * poundToGram;
  } 
  
  else if (convertFrom.value === 'pound' && convertTo.value === 'kilogram') {
    result = amount.valueAsNumber * poundToKilogram;
  } 
  
  // ounce
  else if (convertFrom.value === 'ounce' && convertTo.value === 'gram') {
    result = amount.valueAsNumber * ounceToGram;
  } 
  
  else {
    result = amount.valueAsNumber * ounceToKilogram;
  }

  return result;
}



// print result out below the form
formWeight.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // store the convertings in a variable
  const results = calculateConvert();


  // Display the result with the converted amount and the value it was converted to in HTML
  const resultElement = document.querySelector('.result') as HTMLElement;
  resultElement.innerHTML = `Result: ${results} ${convertTo.value}(s)`;

  // Display a paragraph with history result once a result has been calculated
  const resultHistoryElement = document.querySelector('.resultHistory') as HTMLElement;
  resultHistoryElement.innerHTML = `Result history`;


  // display the history of the results
  let doc: HasFormatter;
  if (convertFrom.value === 'pound') {
    doc = new Pound(convertFrom.value, amount.valueAsNumber, convertTo.value, results)
  } else {
    doc = new Ounce(convertFrom.value, amount.valueAsNumber, convertTo.value, results)
  }

  
  // write the list out
  list.render(doc, convertFrom.value, 'end')


  
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
