import { Selector } from 'testcafe';

fixture('ToDo List App').page('./index.html');

test('Verify Background Color', async (t) => {
  const appElement = Selector('body');
  const expectedColor = 'rgb(85, 85, 85)';

  console.log(await appElement.getStyleProperty('background-color'));

  await t.expect(appElement.getStyleProperty('background-color')).eql(expectedColor);
});




