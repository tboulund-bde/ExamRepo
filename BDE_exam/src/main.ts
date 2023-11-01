import './style.css'
// import { Measure } from './modules/measure.js'
import { listResults } from './modules/listResults.js'
import { Ounce } from './classes/ounce.js';
import { Pound } from './classes/pound.js';
import { HasFormatter } from './modules/HasFormatter.js';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="title-subheading">
      <h1>Americans being American</h1>
      <p>Ever wanted to bake a cake and the recipe is written in the “wrong” weights? We do! And that is why we created this weight converter calculator.</p>
    </div>
    
    <h2>Convert from American weight to European</h2>
    <form class="converter-american-to-european">
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


  </div>
`



let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Pound("Pound", 2, "Gram", 5);
docTwo = new Ounce("Ounce", 5, "Kilogram", 3);


// can be added as long as they have the HasFormatter interface
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);


// Measure class
const resultOne = new Pound("Pound", 1, "Gram", 6);
const resultTwo = new Pound("Ounce", 3, "Gram", 5);


// create an array to store the results under one 
let results: Pound[] = [];
results.push(resultOne);
results.push(resultTwo);

console.log( results );




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






// links to american to european converter
const formAmerican = document.querySelector('.converter-american-to-european') as HTMLFormElement;

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

  if (convertFrom.value === 'pound' && convertTo.value === 'gram') {
    result = amount.valueAsNumber * poundToGram;
  } 
  
  else if (convertFrom.value === 'pound' && convertTo.value === 'kilogram') {
    result = amount.valueAsNumber * poundToKilogram;
  } 
  
  else if (convertFrom.value === 'ounce' && convertTo.value === 'gram') {
    result = amount.valueAsNumber * ounceToGram;
  } 
  
  else {
    result = amount.valueAsNumber * ounceToKilogram;
  }

  return result;
}



// print result out below the form
formAmerican.addEventListener('submit', (e: Event) => {
  e.preventDefault();


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