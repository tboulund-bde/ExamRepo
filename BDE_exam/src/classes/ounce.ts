import { HasFormatter } from '../modules/HasFormatter.js'

// interface with classes for Ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class Ounce implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        private convertFrom: string, // make private so it isn't accessable to change the value
        public amount: number, // make public so it is accessable to change the value
        private convertTo: string, // make private so it isn't accessable to change the value
        private results: number, // make private so it isn't accessable to change the value
    ) {}
  
    // prints out what was the result of the conversion
    format() {
      return `${this.results} ${this.convertTo}(s) = ${this.amount} ${this.convertFrom}(s)`;
    }
  }


