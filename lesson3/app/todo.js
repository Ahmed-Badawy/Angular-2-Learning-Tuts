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
var nestedComponent_1 = require("./nestedComponent");
var TodoInput = (function () {
    function TodoInput(Todoserv) {
        this.Todoserv = Todoserv;
        //	todo_text_model;
        this.todo_text_model = '';
        this.data_from_child = '';
        //this.Todoserv = Todoserv; //public made the same thing
        console.log(Todoserv);
    }
    TodoInput.prototype.run_from_child = function ($event) {
        console.log($event);
        this.data_from_child = $event;
    };
    TodoInput.prototype.ngOnInit = function () { console.log("Run on init"); };
    TodoInput.prototype.ngOnDestroy = function () { console.log("Run on destroy"); };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            directives: [nestedComponent_1.NestedComponent],
            template: "\n\t\tthis box is in the parent: <input [(ngModel)]='todo_text_model' />\n\t\t<nested_comp [data_from_parent]=\"todo_text_model\" (data_from_child)='run_from_child($event)'></nested_comp>\n\t\t<h4>{{data_from_child}}</h4>\n\t"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoInput);
    return TodoInput;
}());
exports.TodoInput = TodoInput;
//# sourceMappingURL=todo.js.map