import { HasFormatter } from '../interfaces/HasFormatter.js'

// interface with classes for Ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class Ounce implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        public convertFromWeight: string,
        public amountWeight: number, // make public so it is accessable to change the value
        public convertToWeight: string, 
        public resultsWeight: number, 
    ) {}
  
    // prints out what was the result of the conversion
    format() {
      return `${this.resultsWeight} ${this.convertToWeight}(s) = ${this.amountWeight} ${this.convertFromWeight}(s)`;
    }
  }


