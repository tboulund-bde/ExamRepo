import { Selector } from 'testcafe';

fixture`Todolist - Delete Marked as Done`.page`../index.html`;

test('Delete a completed task', async (t) => {
  // Pre-assertion: No existing completed tasks are on the list.
  await t.expect(Selector('ul li.completed').count).eql(0);

  // Arrange: Create a new task and mark it as done.
  const newTaskName = 'Task to be deleted haha'; 
  await t
    .typeText('#taskInput', newTaskName)
    .pressKey('enter');

  // Mark the task as done.
  await t.click(Selector('ul li div button:nth-child(1)'));

  // Act: Delete the completed task.
  await t.click(Selector('ul li.completed div button:nth-child(2)'));

  // Assert: Verify that there are no completed tasks left.
  await t.expect(Selector('ul li.completed').count).eql(0);
});
