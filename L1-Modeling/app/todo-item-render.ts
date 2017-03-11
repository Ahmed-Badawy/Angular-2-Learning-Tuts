import {Component,Input} from "angular2/core";

@Component({
	selector: "todo-item-render",
	template: `<div>in progress</div>`
})

export class TodoItemRenderer{
	@Input() todo;
}

/*
		    	<input type='checkbox' (click)='todo.toggle()'>
	    		<span [hidden]="todo.status=='completed' " [contentEditable]="todo.status=='started' ">{{todo.title}} </span>
	    		<button (click)='deleteTodo(i)'> X </button> 
*/