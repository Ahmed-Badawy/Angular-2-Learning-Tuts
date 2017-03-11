//this is How to create a service

import {Injectable} from "@angular/core"
import {TodoModel} from "./todo-model"

@Injectable()
export class TodoService{
	//todos = ["todo 1","todo 2","todo 3"];
    
	todos:TodoModel[] = [
		new TodoModel("todo obj 1",false),
		new TodoModel("todo obj 2"),
		new TodoModel("todo obj 3",true),
	];
    
    
// this function take a new todo then add it to the old todos after creating a different object from it.
// why we did this. to help angular to run the filter again after this function running
    add_todo(new_todo:TodoModel){
        this.todos = [...this.todos, new_todo];
    }
    
    
}