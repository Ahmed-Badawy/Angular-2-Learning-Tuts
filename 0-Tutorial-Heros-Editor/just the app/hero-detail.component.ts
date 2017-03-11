import { Component, Input } from '@angular/core';
import { Hero } from './Hero';

@Component({
    selector: 'inner-comp',
    template: `<h3 *ngIf='hero' class='inner'>Inner Component: <small>Inputed hero is: {{hero.name}} </small></h3>`,
    styles: [`.inner{ background-color: yellow; }; padding:10px; border-radius:10px;`]
})
export class HeroDetailComponent{
    @Input()
    hero: Hero;
}



