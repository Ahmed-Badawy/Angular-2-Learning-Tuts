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
var TodoInput = (function () {
    function TodoInput(Todoserv) {
        this.Todoserv = Todoserv;
        //this.Todoserv = Todoserv; //public made the same thing
        console.log(Todoserv);
    }
    TodoInput.prototype.onClick = function (event, element) {
        this.Todoserv.todos.push(element.value);
        console.log(this.Todoserv.todos);
        console.log("todo_text_model is: " + this.todo_text_model); // this will get you the todo_text_model
        console.log(event);
        console.log(element);
        console.log("-----------------------");
        element.value = '';
    };
    TodoInput.prototype.onSubmit = function () {
        console.log("------submitted------");
        console.log("todo_text_model is: " + this.todo_text_model); // this will get you the todoModel
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            template: "\n\t\t<p>i am a todo input</p>\n\t\t<form (submit)='onSubmit()'>\n\n<pre style='background-color:#444;color:white;padding:10px;font-size:16px'> you can get the element two ways:-\n\t- by using a reference #ref_name & passing it to the controller as a variable\n\t- by defining a ngModal like: [(ngModal)]=\"modal_name\" & using this.modal_name in the controller\n</pre>\n\n\t\t<input #myInputId  [(ngModel)]=\"todo_text_model\" >\n\t\t<br>\n\t\t<b>Modal Binding: </b>{{todo_text_model}}\n\t\t<br>\n\t\t<button type='submit' (click)=\"onClick($event,myInputId)\">click me</button>\n\t\t<form>\n\t"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoInput);
    return TodoInput;
}());
exports.TodoInput = TodoInput;
//# sourceMappingURL=todo.js.map