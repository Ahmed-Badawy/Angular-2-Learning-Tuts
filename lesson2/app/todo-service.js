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
var core_1 = require("@angular/core");
var todo_model_1 = require("./todo-model");
var TodoService = (function () {
    function TodoService() {
        //todos = ["todo 1","todo 2","todo 3"];
        this.todos = [
            new todo_model_1.TodoModel("todo obj 1", false),
            new todo_model_1.TodoModel("todo obj 2"),
            new todo_model_1.TodoModel("todo obj 3", true),
        ];
    }
    // this function take a new todo then add it to the old todos after creating a different object from it.
    // why we did this. to help angular to run the filter again after this function running
    TodoService.prototype.add_todo = function (new_todo) {
        this.todos = this.todos.concat([new_todo]);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo-service.js.map