import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';


@Component({
  selector: 'page4',
  template: `
  			<label for="">write hero id</label>
    	<input [(ngModel)]="requested_id" placeholder="id" (change)="query_for_hero(requested_id)">
  			<h1>this is page4. <br>
  					Hero id is: {{hero.id}} <br>
  					Hero name is: {{hero.name}}
  			</h1>
  			<hr>
					<pre>
notice you can go back (using the router functionlity) from here: 
					</pre>
  			<h3>notice that this page have the go back functionlity</h3>
					<button (click)="goBack()">Back</button>
					<button (click)="go_to_page_with_param()">go_to_page_with_param</button>
  `
})

export class Page4 implements OnInit {
  hero:Hero = {id:0,name:''};
  requested_id:number = 0;

			constructor( private heroService: HeroService, private route: ActivatedRoute, private location: Location,  private router: Router) {}
			ngOnInit(): void {
				 this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
			}			
			query_for_hero(id){
					console.log("query for id: ",this.requested_id);
				 this.heroService.getHero(this.requested_id).then(res=>this.hero = res);
			}

			goBack(): void { this.location.back() }
			go_to_page_with_param(): void {
			  this.router.navigate(['/page4', 20]); //go to the same page but with param 20
			}

}