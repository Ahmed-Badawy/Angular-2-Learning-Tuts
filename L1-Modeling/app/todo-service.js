System.register(["angular2/core", "./todoModel"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todoModel_1;
    var TodoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoModel_1_1) {
                todoModel_1 = todoModel_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todos_objs = [
                        new todoModel_1.TodoModel("todo obj 1", false),
                        new todoModel_1.TodoModel("todo obj 2"),
                        new todoModel_1.TodoModel("todo obj 3", true),
                    ];
                }
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo-service.js.map