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
/*
Naming conventions:-
  Notice that we have an AppComponent in a file named app.component.ts and our new HeroDetailComponent is in a file named hero-detail.component.ts.
  All of our component names end in "Component". All of our component file names end in ".component".
  We spell our file names in lower dash so we don't worry about case sensitivity on the server or in source control.
*/
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.heroes = this.heroService.getHeroes();
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
        this.heroService.getHeroes_usingHTTP().then(function (heroes) { return console.log("with http: ", heroes); });
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log("SelectedHero is: ", hero);
    };
    //Writing an APP using service & API
    AppComponent.prototype.save = function () {
        this.heroService.update(this.hero).then(function (_) { return true; } /*this.goBack()*/); //in the then do something you want
    };
    AppComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    AppComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-comp',
            template: "\n\n<h1>Routing</h1>\n// routerLinkActive='active' means if link is selected, give it the class of active <br>\n  <a routerLink=\"/\" routerLinkActive=\"active\">Main</a>\n  <a routerLink=\"/one\" routerLinkActive=\"active\">One</a>\n  <a routerLink=\"/two\" routerLinkActive=\"active\">Two</a>\n  <a routerLink=\"/three\" routerLinkActive=\"active\">Three (redirect to one)</a>\n  <a routerLink=\"/app\" routerLinkActive=\"active\">App</a>\n  <a routerLink=\"/two/12\" routerLinkActive=\"active\">Two With Params: 12</a>\n  \n  \n  <router-outlet></router-outlet>\n<hr>    \n\n\n  <h1>{{title | uppercase}} : to upper</h1>\n  <h2>{{hero.name}} details!</h2>\n  <div><label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input placeholder=\"name\" [(ngModel)]=\"hero.name\"><span>Two way binding</span>\n  </div> \n  <hr>\n\n\n<h1 *ngIf=\"!heroes\" class='text-center'>Wait Until the Promise Resolves</h1>\n<ul>\n  <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero == selectedHero\" (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    <button class=\"delete\" (click)=\"delete(hero); $event.stopPropagation()\" class='btn btn-xs btn-danger'>X</button>\n  </li>\n</ul>\n\n\n<inner-comp [hero]=\"selectedHero\"></inner-comp>\n\n<div *ngIf=\"selectedHero\">\n  <h2>{{selectedHero.name}} details!</h2>\n  <div><label>id: </label>{{selectedHero.id}}</div>\n  <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n  </div>  \n</div>\n\n<hr>\n\n<h1>Add A Hero</h1>\n<div>\n  <label>Hero name:</label> <input #heroName />\n  <button (click)=\"add(heroName.value); heroName.value=''\">\n    Add\n  </button>\n</div>\n\n\n",
            styles: ["\n  li{ padding: 4px; border-radius: 10px; cursor: pointer}\n  .selected{ background-color: #666; color:white; font-weight:bolder }\n  .inner{ background-color: #666; color:white }\n  .active{ background-color: #444; color:white}\n"],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map