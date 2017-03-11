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
//for the http request:-
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var TodoService_with_http = (function () {
    function TodoService_with_http(_http) {
        this._http = _http;
        this._serviceUrl = "/app/json/1.json";
    }
    TodoService_with_http.prototype.getData = function () {
        return this._http.get(this._serviceUrl)
            .map(function (response) {
            return response.json();
        })
            .do(function (data) { return console.log('All Data: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ;
    TodoService_with_http.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    TodoService_with_http = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService_with_http);
    return TodoService_with_http;
}());
exports.TodoService_with_http = TodoService_with_http;
//# sourceMappingURL=todo-service_with_http.js.map