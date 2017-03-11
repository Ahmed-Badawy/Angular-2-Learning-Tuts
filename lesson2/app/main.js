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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var todo_1 = require('./todo');
var todo_service_1 = require('./todo-service');
var todo_list_1 = require('./todo-list');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [app_component_1.AppComponent, todo_1.TodoInput, todo_list_1.TodoList],
            template: "\n\t\t<h3>hello world</h3>\n\t\t<mytag></mytag>\n\t\t<todo-input></todo-input> <br>\n\t\t<todo-list></todo-list>\t\t\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, [todo_service_1.TodoService]);
//# sourceMappingURL=main.js.map