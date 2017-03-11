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
var platform_browser_1 = require('@angular/platform-browser');
var main_component_1 = require('./main.component');
var app_component_1 = require('./app.component');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
//to enable two way binding:-
var forms_1 = require('@angular/forms');
//--------------------HTTP Requests---------------------
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
//---------------------Routing-----------------------------
var router_1 = require('@angular/router');
var one_component_1 = require('./one.component');
var two_component_1 = require('./two.component');
var router_instances = [
    { path: '', redirectTo: '/one', pathMatch: 'full' },
    { path: 'one', component: one_component_1.OneComponent },
    { path: 'two', component: two_component_1.TwoComponent },
    { path: 'three', redirectTo: '/one', pathMatch: 'full' },
    { path: 'app', component: app_component_1.AppComponent },
    { path: 'two/:id', component: two_component_1.TwoComponent },
];
//-----------------------------------------------------
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                // InMemoryWebApiModule.forRoot(InMemoryDataService), //for api simulation
                router_1.RouterModule.forRoot(router_instances)],
            declarations: [app_component_1.AppComponent, main_component_1.MainComponent, hero_detail_component_1.HeroDetailComponent, two_component_1.TwoComponent, one_component_1.OneComponent],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map