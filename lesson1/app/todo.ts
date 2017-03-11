import { Component } from '@angular/core';
import {TodoService} from './todo-service';

@Component({
	selector: 'todo-input',
	template: `
		<p>i am a todo input</p>
		<form (submit)='onSubmit()'>

<pre style='background-color:#444;color:white;padding:10px;font-size:16px'> you can get the element two ways:-
	- by using a reference #ref_name & passing it to the controller as a variable
	- by defining a ngModal like: [(ngModal)]="modal_name" & using this.modal_name in the controller
</pre>

		<input #myInputId  [(ngModel)]="todo_text_model" >
		<br>
		<b>Modal Binding: </b>{{todo_text_model}}
		<br>
		<button type='submit' (click)="onClick($event,myInputId)">click me</button>
		<form>
	`
})

export class TodoInput{
	todo_text_model;

	constructor(public Todoserv:TodoService){
		//this.Todoserv = Todoserv; //public made the same thing
		console.log(Todoserv);
	}

	onClick(event,element){
		this.Todoserv.todos.push(element.value);
		console.log(this.Todoserv.todos);
		console.log("todo_text_model is: "+this.todo_text_model); // this will get you the todo_text_model

		console.log(event);
		console.log(element);
		console.log("-----------------------");
		element.value = '';
	}

	onSubmit(){
		console.log("------submitted------");
		console.log("todo_text_model is: "+this.todo_text_model); // this will get you the todoModel
	}
}