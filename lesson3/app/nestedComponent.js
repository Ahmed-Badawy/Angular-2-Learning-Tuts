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
var NestedComponent = (function () {
    function NestedComponent() {
        this.message = "What's Up";
        this.data_from_child = new core_1.EventEmitter();
    }
    NestedComponent.prototype.ngOnChanges = function () {
        console.log("hello world");
    };
    NestedComponent.prototype.sent_out = function () {
        this.data_from_child.emit("Child Said: " + this.model_from_child);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NestedComponent.prototype, "data_from_parent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NestedComponent.prototype, "data_from_child", void 0);
    NestedComponent = __decorate([
        core_1.Component({
            selector: 'nested_comp',
            templateUrl: 'app/templates/template1.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NestedComponent);
    return NestedComponent;
}());
exports.NestedComponent = NestedComponent;
//# sourceMappingURL=nestedComponent.js.map