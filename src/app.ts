interface Task {
  id: number;
  description: string;
  completed: boolean;
}

class ToDoList {
  tasks: Task[] = [];
  taskIdCounter: number = 1;

  addTask(description: string): void {
      const newTask: Task = {
          id: this.taskIdCounter++,
          description,
          completed: false,
      };
      this.tasks.push(newTask);
      this.renderTasks();
  }

  renderTasks(): void {
      const taskListElement: HTMLElement | null = document.getElementById('taskList');

      if (taskListElement) {
          taskListElement.innerHTML = '';
          this.tasks.forEach((task) => {
              const taskElement = document.createElement('li');
              taskElement.textContent = `${task.description} (${task.completed ? 'Completed' : 'Incomplete'})`;
              taskListElement.appendChild(taskElement);
          });
      }
  }
}

function addTask() {
  const taskInput: HTMLInputElement | null = document.getElementById('taskInput') as HTMLInputElement;
  if (taskInput) {
      todoList.addTask(taskInput.value);
      taskInput.value = '';
  }
}

const todoList = new ToDoList();


