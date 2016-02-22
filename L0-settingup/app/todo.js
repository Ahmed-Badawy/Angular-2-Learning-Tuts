System.register(['angular2/core', './todo-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1;
    var TodoInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodoInput = (function () {
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
                        template: "\n\t\t<p>i am a todo input</p>\n\t\t<form (submit)='onSubmit()'>\n\t\t<input #myInputId  [(ngModel)]=\"todo_text_model\" >\n\t\t{{todo_text_model}}\n\t\t<button type='submit' (click)=\"onClick($event,myInputId)\">click me</button>\n\t\t<form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoInput);
                return TodoInput;
            })();
            exports_1("TodoInput", TodoInput);
        }
    }
});
//# sourceMappingURL=todo.js.map