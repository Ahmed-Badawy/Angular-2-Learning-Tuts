import {Component} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoModel} from './todoModel';

@Component({
	selector: 'todo-input',
	template: `
		<p>i am a todo input</p>
		<form (submit)='onSubmit()'>
			<input #myInputId  [(ngModel)]="todomodel.title" > <br>
			binding: {{todomodel.title}}
			<button type='submit'>Submit</button>
		<form>
	`
})

export class TodoInput{
	todomodel:TodoModel = new TodoModel();
	
	constructor(public Todoserv:TodoService){
		console.log(Todoserv);
	}

	onSubmit(){
		console.log("------submitted------");
		this.Todoserv.todos_objs.push(this.todomodel);
		this.todomodel = new TodoModel();
	}
}