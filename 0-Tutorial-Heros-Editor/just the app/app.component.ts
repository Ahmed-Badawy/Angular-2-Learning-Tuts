import { Component,OnInit } from '@angular/core';


import { Hero } from './Hero';
import { HeroService } from './hero.service';


/*
Naming conventions:-
  Notice that we have an AppComponent in a file named app.component.ts and our new HeroDetailComponent is in a file named hero-detail.component.ts.
  All of our component names end in "Component". All of our component file names end in ".component".
  We spell our file names in lower dash so we don't worry about case sensitivity on the server or in source control.
*/

@Component({
  selector: 'app-comp',
  template: `

<h1>Routing</h1>
// routerLinkActive='active' means if link is selected, give it the class of active <br>
  <a routerLink="/" routerLinkActive="active">Main</a>
  <a routerLink="/one" routerLinkActive="active">One</a>
  <a routerLink="/two" routerLinkActive="active">Two</a>
  <a routerLink="/three" routerLinkActive="active">Three (redirect to one)</a>
  <a routerLink="/app" routerLinkActive="active">App</a>
  <a routerLink="/two/12" routerLinkActive="active">Two With Params: 12</a>
  
  
  <router-outlet></router-outlet>
<hr>    


  <h1>{{title | uppercase}} : to upper</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input placeholder="name" [(ngModel)]="hero.name"><span>Two way binding</span>
  </div> 
  <hr>


<h1 *ngIf="!heroes" class='text-center'>Wait Until the Promise Resolves</h1>
<ul>
  <li *ngFor="let hero of heroes" [class.selected]="hero == selectedHero" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
    <button class="delete" (click)="delete(hero); $event.stopPropagation()" class='btn btn-xs btn-danger'>X</button>
  </li>
</ul>


<inner-comp [hero]="selectedHero"></inner-comp>

<div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>  
</div>

<hr>

<h1>Add A Hero</h1>
<div>
  <label>Hero name:</label> <input #heroName />
  <button (click)="add(heroName.value); heroName.value=''">
    Add
  </button>
</div>


`,

styles: [`
  li{ padding: 4px; border-radius: 10px; cursor: pointer}
  .selected{ background-color: #666; color:white; font-weight:bolder }
  .inner{ background-color: #666; color:white }
  .active{ background-color: #444; color:white}
`],

// providers: [HeroService]


})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService){}
  
  heroes : Hero[];
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    this.heroService.getHeroes_usingHTTP().then( heroes=>console.log("with http: ",heroes) );
  }

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log("SelectedHero is: ",hero);
  }  



//Writing an APP using service & API
  save(): void {
    this.heroService.update(this.hero).then(_=>true/*this.goBack()*/); //in the then do something you want
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }  


}

