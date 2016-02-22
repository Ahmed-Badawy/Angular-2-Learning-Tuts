import {Injectable} from "angular2/core"
import {TodoModel} from "./todoModel"

@Injectable()

export class TodoService{
	todos_objs = [
		new TodoModel("todo obj 1",false),
		new TodoModel("todo obj 2"),
		new TodoModel("todo obj 3",true),
	]
}