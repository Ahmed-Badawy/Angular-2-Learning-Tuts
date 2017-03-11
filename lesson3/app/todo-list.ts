import { Component,OnInit } from '@angular/core';

//importing it for the filter
import {FilterArrayPipe} from './filter_array_pipe';

//importing it for the service
import {TodoService} from './todo-service';
//import from http service
import {TodoService_with_http} from './todo-service_with_http';


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


<h4>There is a filter applied for not viewing todos that starts with a specified char: in this case it's (s)</h4>


<!-- 
You can add property binding with 3 ways: 
    way 1: <img [src]='model.img' />
    way 2: <img src={{model.img}} />
    way 3: <img src='http://domain/img/{{model.img}}' />
//& there are some built-in angular props & other custom props... 
    custom like [title] or [src] & built-in like [ngClass]

-->
	    	<ul>
            <li *ngFor="let todo of our_todos.todos | starts_with_filter : 's'; let i=index"> 
                <span [hidden]="todo.status=='completed'" [ngClass]="todo.myClass" [title]='todo.title'>{{i}} - {{todo.title}}</span> 
                <span *ngIf='todo.myClass' >----||----</span>  <!-- *ngIf implementation -->
                <button (click)='delete($event,todo,i)'>Delete</button> 
                <button (click)='todo.toggle_hidden()'>Hide/Show</button>
                <button (click)='todo.toggle_myClass()'>Change Class</button>
            </li>
	    	</ul>

	    </div>
	    <hr><hr><hr><hr>

<h1>This is From the HTTP Request</h1>
        <ul>
            <li *ngFor='let item of http_list'>{{item.title}}</li>
        </ul>
    `
})
export class TodoList implements OnInit{
	message = "hello world Message";
    products: any[] = []; //typescript way to an array contains any objects

    http_list;


	constructor(public our_todos:TodoService, public http_service:TodoService_with_http ){//this is how to use a service from a provider

	}
    ngOnInit():void{
        this.http_service.getData().subscribe( 
            json_string =>{
                console.log(json_string);
                this.http_list = json_string;
            },
            error =>{
                console.error(error);
                alert(error);
            }
        )
    }


	delete(evt,todo,index):void{ //void express the return type
		console.log(todo);
		console.log(index);
		this.our_todos.todos.splice(index,1);
//if you want the filters to work you need to spacify the .splice function from the service file just like the add function
	}


}