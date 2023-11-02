const board = document.querySelector('.game-container') as HTMLElement;

function main(): void {
    makeBox();
}

function makeBox(): void {
    const box: HTMLDivElement = document.createElement('div');
    box.className = 'box';
    box.textContent = 'X';
    board.append(box);
}

main()