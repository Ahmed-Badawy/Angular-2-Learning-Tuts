import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>

  <ul>
		  <li *ngFor="let h of heroes">{{h.id}}: <input [(ngModel)]='h.name' [disabled]="h==selectedHero"/> </li>
		</ul>
  <ul>
		  <button *ngFor="let h of heroes" (click)="onSelect(h)" [class.selected]="h==selectedHero"> {{h.name}} </button>
		</ul>


<div *ngIf="selectedHero">
	<hero-details [selected_hero]="selectedHero" [str_var]="'string variabel passed from parent to child'"></hero-details>
</div>
  `,

  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  hero:Hero = { id: 1, name: "Helo 1" };
		// heroes = HEROES;
		// heroes = Hero[];

		selectedHero: Hero;
  heroes: Hero[];


		constructor(private heroService: HeroService){}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes=heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }


		onSelect(hero:Hero): void {
				if(this.selectedHero==hero){
					this.selectedHero = undefined;
					return;
				}
		  this.selectedHero = hero;
				// window.alert(hero.name);
		}



}


