import { Component } from '@angular/core';
import {TodoService} from './todo-service';
import {TodoModel} from "./todo-model"
import { NestedComponent } from "./nestedComponent";
import { OnInit, OnDestroy } from "@angular/core"

@Component({
	selector: 'todo-input',
	directives: [NestedComponent],
	template: `
		this box is in the parent: <input [(ngModel)]='todo_text_model' />
		<nested_comp [data_from_parent]="todo_text_model" (data_from_child)='run_from_child($event)'></nested_comp>
		<h4>{{data_from_child}}</h4>
	`
})

export class TodoInput implements OnInit,OnDestroy { //this is how to attach life cycle interfaces
//	todo_text_model;
	todo_text_model = '';
	data_from_child = '';

	constructor(public Todoserv:TodoService){
		//this.Todoserv = Todoserv; //public made the same thing
		console.log(Todoserv);
	}

	run_from_child($event):void{
		console.log($event);
		this.data_from_child = $event;
	}

	ngOnInit():void{ console.log("Run on init") }
	ngOnDestroy():void{ console.log("Run on destroy") }

}