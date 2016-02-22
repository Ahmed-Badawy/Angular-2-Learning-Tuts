import {Component} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoItemRenderer} from './todo-item-renderer';

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
	    			<todo-item-renderer [todo]='todo'></todo-item-renderer>
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