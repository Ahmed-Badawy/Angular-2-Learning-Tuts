import { Injectable } from '@angular/core';
import { Hero } from './Hero';

//for http:
    import { Headers, Http } from '@angular/http';
    import 'rxjs/add/operator/toPromise';



@Injectable()
export class HeroService {
    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id == id));
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
        setTimeout(resolve, 3000)) // delay 3 seconds
        .then(() => this.getHeroes());
    }    
    
// The http area doesn't currently work as it needs a server. 
/* HTTP Promise:-
We're still returning a Promise but we're creating it differently.
The Angular http.get returns an RxJS Observable. Observables are a powerful way to manage asynchronous data flows. 
We'll learn about Observables later in this chapter.*/
    constructor(private http: Http) { }


    // private heroesUrl = 'app/data/heroes.json';  // URL to web api
    private heroesUrl = 'http://localhost/tests/ngapp/data/heroes.json';  // URL to web api

    getHeroes_usingHTTP(): Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


    private headers = new Headers({'Content-Type': 'application/json'});
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }    

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }    

}



    const HEROES: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];




