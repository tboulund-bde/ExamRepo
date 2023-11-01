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
}

// task 6
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

// Function to calculate inches to cm
function calculateInchesToCm (inches: number) {
  return inches * inch;
}

// console log to check the result
console.log(calculateInchesToCm (5));



// Calculate from cm to inches
// Store the static number of a cm
let cmToInch:number = 0.393701;

// Function to calculate cm to inches
function calculateCmToInches (cms: number) {
  return cms * cmToInch;
}

// console log to check the result
console.log(calculateCmToInches (5));


