import {bootstrap}    from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {TodoInput} from './todo'
import {TodoService} from './todo-service'
import {TodoList} from './todo-list'

@Component({
	selector: 'custom_app',
	directives: [TodoInput,TodoList]
	template: `
		<h3>hello world</h3>
		<todo-input></todo-input> <br>
		<todo-list></todo-list>
	`
})
class App{}

bootstrap(App,[TodoService]);