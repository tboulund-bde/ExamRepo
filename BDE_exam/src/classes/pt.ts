import { HasFormatter } from '../interfaces/HasFormatter.js'

// interface with classes for Pint
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class Pt implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        private convertFromLiquid: string, // make private so it isn't accessable to change the value
        public amountLiquid: number, // make public so it is accessable to change the value
        private convertToLiquid: string, // make private so it isn't accessable to change the value
        private resultsLiquid: number, // make private so it isn't accessable to change the value
    ) {}
  
    // prints out what was the result of the conversion
    format() {
      return `${this.amountLiquid} ${this.convertFromLiquid} = ${this.resultsLiquid} ${this.convertToLiquid}`;
    }
  }


