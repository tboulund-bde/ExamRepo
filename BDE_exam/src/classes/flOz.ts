import { HasFormatterLiquid } from '../modules/HasFormatterLiquid.js'

// interface with classes for Fluid ounce
// 'implements HasFormatterLiquid' tells it to follow the structure of HasFormatterLiquid
export class FlOz implements HasFormatterLiquid{
  
    // tell system what to expect with constructor
    constructor (
        private convertFromLiquid: string, // make private so it isn't accessable to change the value
        public amountLiquid: number, // make public so it is accessable to change the value
        private convertToLiquid: string, // make private so it isn't accessable to change the value
        private resultsLiquid: number, // make private so it isn't accessable to change the value
    ) {}
  
    // prints out what was the result of the conversion
    format() {
      return `${this.resultsLiquid} ${this.convertToLiquid}(s) = ${this.amountLiquid} ${this.convertFromLiquid}(s)`;
    }
  }


