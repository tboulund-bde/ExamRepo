interface Task {
    id: number;
    description: string;
    completed?: boolean;
  }
  
  const tasks: Task[] = [];
  
  function addTask(description: string, completed: boolean = false): Task {
    const newTask: Task = {
      id: tasks.length + 1,
      description,
    };
  
    if (completed) {
      newTask.completed = completed;
    }
  
    tasks.push(newTask);
    return newTask;
  }
  
  function addTaskToList(task: Task): void {
    const taskList = document.getElementById('taskList');
    if (taskList) {
      const li = document.createElement('li');
      li.innerText = task.description;
  
      // Button container
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
  
      // Button to mark as done
      const doneButton = document.createElement('button');
      doneButton.innerText = 'Done';
      doneButton.addEventListener('click', () => {
        li.classList.toggle('completed');
        task.completed = !task.completed;
      });
  
      // Button to delete
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        // Remove the task from the tasks array
        const index = tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          tasks.splice(index, 1);
        }
      });
  
      buttonContainer.appendChild(doneButton);
      buttonContainer.appendChild(deleteButton);
  
      li.appendChild(buttonContainer);
  
      if (task.completed) {
        li.classList.add('completed');
      }
  
      taskList.appendChild(li);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const taskForm = document.getElementById('taskForm');
  
    if (addTaskButton && taskInput && taskForm) {
      taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        const description = taskInput.value.trim();
        if (description) {
          const task = addTask(description);
          addTaskToList(task);
          taskInput.value = '';
        }
      });
  
      addTaskButton.addEventListener('click', () => {
        const description = taskInput.value.trim();
        if (description) {
          const task = addTask(description);
          addTaskToList(task);
          taskInput.value = '';
        }
      });
    }
  
    // Initialize the list with existing tasks
    tasks.forEach(addTaskToList);
  });
  