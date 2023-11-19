import { Selector, t } from 'testcafe';

fixture('ToDo List App').page('./index.html');

test('Add Task Test', async () => {
  await t
    .typeText('#taskInput', 'New Task')
    .click('button')
    .expect(Selector('#taskList li').innerText).contains('New Task (Incomplete)');
});

