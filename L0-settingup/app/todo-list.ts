import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
    selector: 'todo-list',
    template: `
	    <div>
	    	<h3>Service is:</h3>
	    	{{todoService | json}} <br>
	    	{{message}} <br>
	    	<ul>
	    		<li *ngFor="#todo of todoService.todos">{{todo}}</li>
	    	</ul>
	    </div>
	    <hr>
    `
})
export class TodoList{
	message = "hello world Message";

	constructor(public todoService:TodoService){

	}
}