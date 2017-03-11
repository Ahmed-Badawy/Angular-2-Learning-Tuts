import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoInput} from './todo'
import {TodoService} from './todo-service'
import {TodoList} from './todo-list';

import {TodoService_with_http} from './todo-service_with_http';


//importing it for the http request
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';


@Component({
	selector: 'my-app',
	providers: [TodoService, HTTP_PROVIDERS, TodoService_with_http], //you can add providers here or in the bootstrap function
	directives: [AppComponent,TodoInput,TodoList],
	template: `
		<todo-input></todo-input>

		<hr><hr><hr> <br><br><br>

		<todo-list></todo-list>	
	`
})
class App{}

//bootstrap(App, [ TodoService ] ); //you can add providers here also
bootstrap(App);