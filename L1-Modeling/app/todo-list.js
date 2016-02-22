System.register(['angular2/core', './todo-service', './todo-item-renderer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, todo_item_renderer_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_item_renderer_1_1) {
                todo_item_renderer_1 = todo_item_renderer_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                    this.message = "hello world Message";
                    console.log(todoService);
                }
                TodoList.prototype.deleteTodo = function (index) {
                    console.log(index);
                    //console.log(this.todoService);
                    this.todoService.todos_objs.splice(index, 1);
                };
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [todo_item_renderer_1.TodoItemRenderer],
                        template: "\n\t    <div>\n\t    \t<h3>Service is:</h3>\n\t    \t{{todoService | json}} <br>\n\t    \t{{message}} <br>\n\t    \t<ul>\n\t    \t\t<li *ngFor=\"#todo of todoService.todos_objs #i=index\">\n\t    \t\t\t<todo-item-renderer [todo]='todo'></todo-item-renderer>\n\t    \t\t</li>\n\t    \t</ul>\n\t    </div>\n\t    <hr>\n    "
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todo-list.js.map