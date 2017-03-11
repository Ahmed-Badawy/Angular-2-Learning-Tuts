import { Component } from '@angular/core';

@Component({
  selector: 'mytag',
  //template: '<h1 (click)="doit()">{{pageTitle}}</h1>'
  templateUrl: 'app/templates/Component1_template.html'
})
export class AppComponent {

//this is a property: 
	pageTitle:string = "My First Angular 2 App" 

//this is a method:
	doit(){ alert("Doing it"); }

}