import { HasFormatter } from '../interfaces/HasFormatter.js'

// interface with classes for Fluid ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class FlOz implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        public convertFromLiquid: string, 
        public amountLiquid: number, // make public so it is accessable to change the value
        public convertToLiquid: string,
        public resultsLiquid: number, 
    ) {}
  
    // prints out what was the result of the conversion
    format() {
      return `${this.amountLiquid} ${this.convertFromLiquid} = ${this.resultsLiquid} ${this.convertToLiquid}`;
    }
  }


