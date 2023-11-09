//A test to verify that a player can make a move and the cell displays the player's symbol
import { Selector } from 'testcafe';

fixture `TicTacToe Game`
    .page `http://localhost:8081/`; 
test('Player X can make a move', async t => {

    const cell = Selector('.cell').nth(0);

    await t
        .click(cell)
        .expect(cell.textContent).eql('X');
});

//A test to check if the game correctly switches the player after a move
test('Game switches player after a move', async t => {

    const firstCell = Selector('.cell').nth(0);
    const secondCell = Selector('.cell').nth(1);

    await t
        .click(firstCell)
        .click(secondCell)
        .expect(firstCell.textContent).eql('X')
        .expect(secondCell.textContent).eql('O');
});
