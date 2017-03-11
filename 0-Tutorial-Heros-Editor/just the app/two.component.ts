import { Component, Input, OnInit } from '@angular/core';


import { Hero } from './hero';
import { HeroService } from './hero.service';

//for route params
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
    selector: 'two-comp',
    template: `
    <h1>
        <span style='font-size:20vh'>2</span>Here Comes Two Component
        <span *ngIf="hero">---- Hello: {{hero.id}} - {{hero.name}}</span>
    </h1>


    <button (click)="goBack()" class='btn btn-primary'>Back</button>
    <button (click)="goto('one')" class='btn btn-primary'>Go To One</button>


    `,
})
export class TwoComponent implements OnInit{
    hero: Hero;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero).then(hero=>console.log(hero));
        });
    }

    constructor(private heroService: HeroService,
                                     private route: ActivatedRoute,
                                     private location: Location,  
                                     private router: Router) {

                                     }

    goBack(): void {
        this.location.back();
    }

    goto(where:String): void {
        let link = ['/', where];
        this.router.navigate(link);
    }    

                                     
}



