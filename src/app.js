"use strict";
// app.ts
// Explicit variable declaration
var explicitNumber = 42;
// Implicit variable declaration
var implicitString = "Hello, TypeScript!";
// Implement the TodoList interface
var SimpleTodoList = /** @class */ (function () {
    function SimpleTodoList() {
        this.tasks = [];
    }
    SimpleTodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    SimpleTodoList.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.completed = true;
        }
    };
    SimpleTodoList.prototype.listTasks = function () {
        console.log("Tasks:");
        this.tasks.forEach(function (task) {
            console.log("[".concat(task.completed ? "x" : " ", "] ").concat(task.description));
        });
    };
    return SimpleTodoList;
}());
// Example usage
var myTodoList = new SimpleTodoList();
myTodoList.addTask({ id: 1, description: "Learn TypeScript", completed: false });
myTodoList.addTask({ id: 2, description: "Build a TypeScript app", completed: false });
myTodoList.listTasks();
myTodoList.completeTask(1);
myTodoList.listTasks();
