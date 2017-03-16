import { Component, Input } from '@angular/core';
import { Hero } from './hero.model';


@Component({
  	selector: 'hero-details',
    template: `
		  <div *ngIf="selected_hero">
		    <h2>{{selected_hero.name}} details!</h2>
		    <div><label>id: </label>{{selected_hero.id}}</div>
		    <div>
		      <label>name: </label> - {{str_var}}
		      <input [(ngModel)]="selected_hero.name" placeholder="name"/>
		    </div>
		  </div>
    `
})
export class HeroDetailComponent {
	 @Input() selected_hero: Hero;
	 @Input() str_var;
}

