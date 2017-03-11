import {Injectable} from "@angular/core"

//for the http request:-
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs/Observable";



@Injectable()
export class TodoService_with_http{
	private _serviceUrl = "/app/json/1.json"

	constructor(private _http: Http){ }
	getData(): Observable<string[]>{
		return this._http.get(this._serviceUrl)
				.map( (response:Response) =>{
					return <string[]>response.json();
				})
				.do( data=>console.log( 'All Data: '+JSON.stringify(data)) )
				.catch(this.handleError);
	};

	private handleError(error: Response){
		console.log(error);
		return Observable.throw( error.json().error || 'Server Error' )
	}

}