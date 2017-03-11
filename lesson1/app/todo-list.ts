import { Component } from '@angular/core';
import {TodoService} from './todo-service';

@Component({
    selector: 'todo-list',
    template: `
	    <div>
	    	<h3>Service is:</h3>
	           <pre>{{our_todos | json}}</pre>
	    	{{message}} <br>
	    	<ul>
	    		<li *ngFor="let todo of our_todos.todos; let i=index" (click)='doSomeThing($event,todo,i)'>
	    			{{todo}} - (click me)
	    		</li>
	    	</ul>
	    </div>
    `
})
export class TodoList{
	message = "hello world Message";

	constructor(public our_todos:TodoService){

	}
	doSomeThing(evt,todo,index){
		console.log(todo);
		console.log(index);
		this.our_todos.todos.splice(index,1);
	}


}