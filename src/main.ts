import './style.css' //Imports my style.css file, so that i can style my index.html file.

console.log("Code is running") // To test if the code is running, adn if the console.log is working.

//Exports the fuctions to be used in my index.html.
export function calcAdd (a: number, b: number): number { //Function that adds two numbers together, and console logs the result. It also tells the system that the data inserted shouldd be read as a number, not a string. 
  return a + b
}
console.log(calcAdd(1, 2)) //I use the console log to check if the fuction works and is doing what i want it to do.

export function calcSub (a: number, b: number): number {
  return a - b
}
console.log(calcSub(1, 2))

export function calcMul (a: number, b: number): number {
  return a * b
}
console.log(calcMul(1, 2))

export function calcDiv (a: number, b: number): number {
  return a / b
}
console.log(calcDiv(1, 2))


const numAInput = document.getElementById('numA') as HTMLInputElement; // Takes whatever the user put in the input fields and adds it to a variable, so that it can be used in the functions to calculate on.
const numBInput = document.getElementById('numB') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLButtonElement;
const subButton = document.getElementById('sub') as HTMLButtonElement;
const mulButton = document.getElementById('mul') as HTMLButtonElement;
const divButton = document.getElementById('div') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLDivElement;


addButton.addEventListener('click', () => { //Adds listening to the buttons aka the event listeners, so that when the user clicks on the button, the function will run.
  const numA = Number(numAInput.value); //Takes the value of the input field (numA) and adds it to a variable.
  const numB = Number(numBInput.value);
  result.innerHTML = String(calcAdd(numA, numB)); //Uses the function to calculate a result of the two numbers (numA and numB), and in this case it adds theem together.
});

subButton.addEventListener('click', () => {
  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);
  result.innerHTML = String(calcSub(numA, numB));
});

mulButton.addEventListener('click', () => {
  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);
  result.innerHTML = String(calcMul(numA, numB)) ;
});

divButton.addEventListener('click', () => {
  const numA = Number(numAInput.value);
  const numB = Number(numBInput.value);
  result.innerHTML = String(calcDiv(numA, numB));
});