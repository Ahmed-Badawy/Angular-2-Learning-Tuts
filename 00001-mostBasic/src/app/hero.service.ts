import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable()
export class HeroService{

  // getHeroes():Hero[]{ return HEROES }
  getHeroes():Promise<Hero[]>{
		  return new Promise(function(resolve,reject){
		  	window.setTimeout(_=>resolve(HEROES),2000);
		  });
		}

}

// a group of heros
		const HEROES: Hero[] = [
		  {id: 11, name: 'Mr. Nice'},
		  {id: 12, name: 'Narco'},
		  {id: 13, name: 'Bombasto'},
		  {id: 14, name: 'Celeritas'},
		  {id: 15, name: 'Magneta'},
		  {id: 16, name: 'RubberMan'},
		  {id: 17, name: 'Dynama'},
		  {id: 18, name: 'Dr IQ'},
		  {id: 19, name: 'Magma'},
		  {id: 20, name: 'Tornado'}
		];

