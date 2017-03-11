import { Component } from '@angular/core';

@Component({
    selector: 'main-comp',
    template: `
<h1>Routing</h1>
  <a routerLink="/">App</a>
  <a routerLink="/one">One</a>
  <a routerLink="/two">Two</a>
  <a routerLink="/three">Three (redirect to one)</a>
    <a routerLink="/app">App</a>

  <router-outlet></router-outlet>
<hr>    
    `
})
export class MainComponent{

}



