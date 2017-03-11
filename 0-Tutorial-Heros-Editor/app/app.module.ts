import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';


import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

//to enable two way binding:-
  import { FormsModule }   from '@angular/forms';


//--------------------HTTP Requests---------------------
  import { HttpModule }    from '@angular/http';
      // Imports for loading & configuring the in-memory web api
      // import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
      // import { InMemoryDataService }  from './in-memory-data.service';


//---------------------Routing-----------------------------
  import { RouterModule, Routes }   from '@angular/router';

  import { OneComponent } from './one.component';
  import { TwoComponent } from './two.component';
  const router_instances: Routes = [
    { path: '',   redirectTo: '/one', pathMatch: 'full' },  
    { path: 'one', component: OneComponent },
    { path: 'two', component: TwoComponent },
    { path: 'three',   redirectTo: '/one', pathMatch: 'full' },
    { path: 'app', component: AppComponent },  
    { path: 'two/:id', component: TwoComponent },  
  ];
//-----------------------------------------------------

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
                                    // InMemoryWebApiModule.forRoot(InMemoryDataService), //for api simulation
                                    RouterModule.forRoot(router_instances) ],
  declarations: [ AppComponent, MainComponent, HeroDetailComponent, TwoComponent, OneComponent ],
  providers: [HeroService ],   //this is how to add providers
  bootstrap:    [ AppComponent ]
  // bootstrap:    [ MainComponent ]
})
export class AppModule { }