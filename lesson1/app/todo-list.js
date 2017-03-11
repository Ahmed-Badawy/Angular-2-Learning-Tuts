"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('./todo-service');
var TodoList = (function () {
    function TodoList(our_todos) {
        this.our_todos = our_todos;
        this.message = "hello world Message";
    }
    TodoList.prototype.doSomeThing = function (evt, todo, index) {
        console.log(todo);
        console.log(index);
        this.our_todos.todos.splice(index, 1);
    };
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            template: "\n\t    <div>\n\t    \t<h3>Service is:</h3>\n\t           <pre>{{our_todos | json}}</pre>\n\t    \t{{message}} <br>\n\t    \t<ul>\n\t    \t\t<li *ngFor=\"let todo of our_todos.todos; let i=index\" (click)='doSomeThing($event,todo,i)'>{{todo}} - (click me)</li>\n\t    \t</ul>\n\t    </div>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.js.map