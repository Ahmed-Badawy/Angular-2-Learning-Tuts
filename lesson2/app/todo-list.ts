import { Component } from '@angular/core';
import {TodoService} from './todo-service';
import {FilterArrayPipe} from './filter_array_pipe';

@Component({
    selector: 'todo-list',
    pipes: [FilterArrayPipe],
    template: `
        <style>
            .second_class{
                background-color:red;
                color:white;
                padding:3px;
            }
        </style>
        
	    <div>
            <input [(ngModel)]='message' /><br>
            <input [(ngModel)]='message' /><br>
	    	{{message}} <br>
	    	<ul>


<h4>There is a filter applied for not viewing todos that starts with a specified char: in this case it's (s)</h4>


<!-- 
You can add property binding with 3 ways: 
    way 1: <img [src]='model.img' />
    way 2: <img src={{model.img}} />
    way 3: <img src='http://domain/img/{{model.img}}' />
//& there are some built-in angular props & other custom props... 
    custom like [title] or [src] & built-in like [ngClass]

-->

            <li *ngFor="let todo of our_todos.todos | starts_with_filter : 's'; let i=index"> 
                <span [hidden]="todo.status=='completed'" [ngClass]="todo.myClass" [title]='todo.title'>{{i}} - {{todo.title}}</span> 
                <span *ngIf='todo.myClass' >----||----</span>  <!-- *ngIf implementation -->
                <button (click)='delete($event,todo,i)'>Delete</button> 
                <button (click)='todo.toggle_hidden()'>Hide/Show</button>
                <button (click)='todo.toggle_myClass()'>Change Class</button>
            </li>


	    	<h3>Real Service Content Before Filtering :-</h3>
            <pre>{{our_todos | json}}</pre>

	    	</ul>
	    </div>
	    <hr>
    `
})
export class TodoList{
	message = "hello world Message";

    products: any[] = []; //typescript way to an array contains any objects

	constructor(public our_todos:TodoService){

	}
	delete(evt,todo,index):void{ //void express the return type
		console.log(todo);
		console.log(index);
		this.our_todos.todos.splice(index,1);
//if you want the filters to work you need to spacify the .splice function from the service file just like the add function
	}


}