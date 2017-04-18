import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
       <nav>
         <a routerLink="/heroes">Heroes</a>
         <a routerLink="/page1">page1</a>
         <a routerLink="/page2">page2</a>
         <a routerLink="/page3">page3</a>
         <a routerLink="/page4/11">page4</a>
       </nav>
       <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}

