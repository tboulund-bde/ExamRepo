import { HasFormatterLiquid } from '../modules/HasFormatterLiquid';

// how the list will be printed out with text
export class listResultsLiquids {
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatterLiquid, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li');

        const h4 = document.createElement('h4');

        h4.innerText = heading; // 'heading' is what will be shown as the heading, write the variable that calculates the converting
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        // put at start 
        if(pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}