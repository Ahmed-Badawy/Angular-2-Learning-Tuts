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
var filter_array_pipe_1 = require('./filter_array_pipe');
var TodoList = (function () {
    function TodoList(our_todos) {
        this.our_todos = our_todos;
        this.message = "hello world Message";
        this.products = []; //typescript way to an array contains any objects
    }
    TodoList.prototype.delete = function (evt, todo, index) {
        console.log(todo);
        console.log(index);
        this.our_todos.todos.splice(index, 1);
        //if you want the filters to work you need to spacify the .splice function from the service file just like the add function
    };
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            pipes: [filter_array_pipe_1.FilterArrayPipe],
            template: "\n        <style>\n            .second_class{\n                background-color:red;\n                color:white;\n                padding:3px;\n            }\n        </style>\n        \n\t    <div>\n            <input [(ngModel)]='message' /><br>\n            <input [(ngModel)]='message' /><br>\n\t    \t{{message}} <br>\n\t    \t<ul>\n\n\n<h4>There is a filter applied for not viewing todos that starts with a specified char: in this case it's (s)</h4>\n\n\n<!-- \nYou can add property binding with 3 ways: \n    way 1: <img [src]='model.img' />\n    way 2: <img src={{model.img}} />\n    way 3: <img src='http://domain/img/{{model.img}}' />\n//& there are some built-in angular props & other custom props... \n    custom like [title] or [src] & built-in like [ngClass]\n\n-->\n\n            <li *ngFor=\"let todo of our_todos.todos | starts_with_filter : 's'; let i=index\"> \n                <span [hidden]=\"todo.status=='completed'\" [ngClass]=\"todo.myClass\" [title]='todo.title'>{{i}} - {{todo.title}}</span> \n                <span *ngIf='todo.myClass' >----||----</span>  <!-- *ngIf implementation -->\n                <button (click)='delete($event,todo,i)'>Delete</button> \n                <button (click)='todo.toggle_hidden()'>Hide/Show</button>\n                <button (click)='todo.toggle_myClass()'>Change Class</button>\n            </li>\n\n\n\t    \t<h3>Real Service Content Before Filtering :-</h3>\n            <pre>{{our_todos | json}}</pre>\n\n\t    \t</ul>\n\t    </div>\n\t    <hr>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.js.map