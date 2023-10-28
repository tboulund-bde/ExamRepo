import './style.css'

console.log("Code is running")

export function calcAdd (a: number, b: number): number {
  return a + b
}
console.log(calcAdd(1, 2))

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

const numAInput = document.getElementById('numA');
const numBInput = document.getElementById('numB');
const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const divButton = document.getElementById('div');
const result = document.getElementById('result');

