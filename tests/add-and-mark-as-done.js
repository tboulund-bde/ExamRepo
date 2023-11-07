import { Selector } from 'testcafe';

fixture`Todolist - Add and Mark as Done`.page`../index.html`; 

test('Mark as done', async (t) => {
  // Pre-assertion: No existing completed tasks are on the list.
  await t.expect(Selector('ul li.completed').count).eql(0);

  // Arrange: Create a new task.
  const newTaskName = 'Do whatever you want'; // Desired task name.
  await t
    .typeText('#taskInput', newTaskName)
    .pressKey('enter');

  // Act: Marks the task as done.
  await t.click(Selector('#taskList > li > div > button:nth-child(1)'));

  // Assert: Verification for number of completed tasks.
  await t.expect(Selector('#taskList > li > div > button:nth-child(1)').count).eql(1);
});
