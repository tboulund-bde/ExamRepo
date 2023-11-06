import { Selector } from 'testcafe';

fixture`Tic-Tac-Toe Game Test`
  .page('http://localhost:1234/'); 

test('Play a full game of Tic-Tac-Toe', async (t) => {

  const gameContainer = Selector('.game-container');
  const winnerMessage = Selector('.winner');
  const playAgainButton = Selector('.button');

 
  async function getBoxContent(index) {
    return await Selector(`#box-${index}`).textContent;
  }

 
  await t.click(gameContainer);

  
  await t
    .click(Selector('#box-1')) // Player X's turn
    .click(Selector('#box-0')) // Player O's turn
    .click(Selector('#box-2')) // Player X's turn
    .click(Selector('#box-3')) // Player O's turn
    .click(Selector('#box-4')) // Player X's turn
    .click(Selector('#box-5')) // Player O's turn
    .click(Selector('#box-6')) // Player X's turn
    .click(Selector('#box-7')) // Player O's turn
    .click(Selector('#box-8')); // Player X's turn

  
  const gameOutcome = await winnerMessage.textContent;

  
  await t
    .expect(gameOutcome).contains('Winner is')
    .click(playAgainButton); 
});

