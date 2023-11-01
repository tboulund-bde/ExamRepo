import { HasFormatter } from '../modules/HasFormatter';

// how the list will be printed out with text
export class listResults {
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
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