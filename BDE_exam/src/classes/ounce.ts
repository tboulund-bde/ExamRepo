import { HasFormatter } from '../modules/HasFormatter.js'

// class for Ounce
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class Ounce implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        public convertFrom: string,
        public amount: number,
        public convertTo: string,
    ) {}
  
    format() {
      return `Converting ${this.amount} ${this.convertFrom}(s) to ${this.convertTo}(s)`;
    }
  }


