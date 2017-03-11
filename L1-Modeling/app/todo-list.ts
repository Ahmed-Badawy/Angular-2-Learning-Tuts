import {Component} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoItemRenderer} from './todo-item-render';

@Component({
    selector: 'todo-list',
    directives:[TodoItemRenderer],
    template: `
	    <div>
	    	<h3>Service is:</h3>
	    	{{todoService | json}} <br>
	    	{{message}} <br>
	    	<ul>
	    		<li *ngFor="#todo of todoService.todos_objs #i=index">
		    		<input type='checkbox' (click)='todo.toggle()' [checked]='todo.checked'>
		    		<span [ngClass]="'todo-'+todo.checked" [contentEditable]="todo.status=='started' ">{{todo.title | uppercase}} </span>
		    		<button (click)='deleteTodo(i)'> X </button> 

	    			<!-- <todo-item-renderer [todo]='todo'></todo-item-renderer> -->
	    		</li>
	    	</ul>
	    </div>
	    <hr>
    `
})
export class TodoList{
	message = "hello world Message";

	constructor(public todoService:TodoService){
		console.log(todoService);
	}

	deleteTodo(index){
		console.log(index);
		//console.log(this.todoService);
		this.todoService.todos_objs.splice(index,1);
	}
}