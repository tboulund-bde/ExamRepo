// app.ts

// Explicit variable declaration
let explicitNumber: number = 42;

// Implicit variable declaration
let implicitString = "Hello, TypeScript!";

// Define an interface for a person
interface Person {
  name: string;
  age?: number; // Optional property
}

// Define a type for a task
type Task = {
  id: number;
  description: string;
  completed: boolean;
  assignedTo?: Person; // Using the Person interface as an optional property
};

// Interface for a to-do list
interface TodoList {
  tasks: Task[];
  addTask(task: Task): void;
  completeTask(id: number): void;
  listTasks(): void;
}

// Implement the TodoList interface
class SimpleTodoList implements TodoList {
  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }

  listTasks(): void {
    console.log("Tasks:");
    this.tasks.forEach((task) => {
      console.log(`[${task.completed ? "x" : " "}] ${task.description}`);
    });
  }
}

// Example usage
const myTodoList = new SimpleTodoList();
myTodoList.addTask({ id: 1, description: "Learn TypeScript", completed: false });
myTodoList.addTask({ id: 2, description: "Build a TypeScript app", completed: false });
myTodoList.listTasks();
myTodoList.completeTask(1);
myTodoList.listTasks();

// This is a test modification for commit