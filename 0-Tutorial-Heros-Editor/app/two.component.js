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
var hero_service_1 = require('./hero.service');
//for route params
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var TwoComponent = (function () {
    function TwoComponent(heroService, route, location, router) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    TwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; }).then(function (hero) { return console.log(hero); });
        });
    };
    TwoComponent.prototype.goBack = function () {
        this.location.back();
    };
    TwoComponent.prototype.goto = function (where) {
        var link = ['/', where];
        this.router.navigate(link);
    };
    TwoComponent = __decorate([
        core_1.Component({
            selector: 'two-comp',
            template: "\n    <h1>\n        <span style='font-size:20vh'>2</span>Here Comes Two Component\n        <span *ngIf=\"hero\">---- Hello: {{hero.id}} - {{hero.name}}</span>\n    </h1>\n\n\n    <button (click)=\"goBack()\" class='btn btn-primary'>Back</button>\n    <button (click)=\"goto('one')\" class='btn btn-primary'>Go To One</button>\n\n\n    ",
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location, router_1.Router])
    ], TwoComponent);
    return TwoComponent;
}());
exports.TwoComponent = TwoComponent;
//# sourceMappingURL=two.component.js.map