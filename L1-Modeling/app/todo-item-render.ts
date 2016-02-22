import {Component,Input} from "angular2/core"

@Component({
	selector: "todo-item-render",
	template: `
	    	<input type='checkbox' (click)='todo.toggle()'>
    		<span [hidden]="todo.status=='completed' " [contentEditable]="todo.status=='started' ">{{todo.title}} </span>
    		<button (click)='deleteTodo(i)'> X </button> 
	`
})

export class TodoItemRenderer{
	@Input() todo;
}