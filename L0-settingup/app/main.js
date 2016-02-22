System.register(['angular2/platform/browser', 'angular2/core', './todo', './todo-service', './todo-list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, todo_1, todo_service_1, todo_list_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'custom_app',
                        directives: [todo_1.TodoInput, todo_list_1.TodoList],
                        template: "\n\t\t<h3>hello world</h3>\n\t\t<todo-input></todo-input> <br>\n\t\t<todo-list></todo-list>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            browser_1.bootstrap(App, [todo_service_1.TodoService]);
        }
    }
});
//# sourceMappingURL=main.js.map