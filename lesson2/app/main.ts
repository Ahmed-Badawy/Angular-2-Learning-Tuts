import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';


import { AppComponent } from './app.component';
import {TodoInput} from './todo'
import {TodoService} from './todo-service'
import {TodoList} from './todo-list'


@Component({
	selector: 'my-app',
	directives: [AppComponent,TodoInput,TodoList],
	template: `
		<h3>hello world</h3>
		<mytag></mytag>
		<todo-input></todo-input> <br>
		<todo-list></todo-list>		
	`
})
class App{}

bootstrap(App,[TodoService]);