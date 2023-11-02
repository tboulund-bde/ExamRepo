import { HasFormatter } from '../interfaces/HasFormatter.js'

// interface with classes for Pound
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class Pound implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        private convertFromWeight: string, // make private so it isn't accessable to change the value
        public amountWeight: number, // make public so it is accessable to change the value
        private convertToWeight: string, // make private so it isn't accessable to change the value
        private resultsWeight: number, // make private so it isn't accessable to change the value
    ) {}
  
    // prints out what was the result of the conversion
    format() {
      return `${this.resultsWeight} ${this.convertToWeight}(s) = ${this.amountWeight} ${this.convertFromWeight}(s)`;
    }
  }


