import { HasFormatter } from '../modules/HasFormatter.js'

// class for Pound
// 'implements HasFormatter' tells it to follow the structure of HasFormatter
export class Pound implements HasFormatter{
  
    // tell system what to expect with constructor
    constructor (
        public convertFrom: string,
        public amount: number,
        public convertTo: string,
    ) {}
  
    format() {
      return `Converted ${this.amount} ${this.convertFrom}(s) to ${this.convertTo}(s)`;
    }
  }


