import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { HeroesComponent } from './heroes.component';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';
import { Page3 } from './pages/page3';
import { Page4 } from './pages/page4';

const routes = [ 
    // { path: '', component: Page1 },
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2 },
    { path: 'page3', component: Page3 },
    { path: 'page4/:id', component: Page4 }
];

@NgModule({
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, Page1,Page2,Page3,Page4 ],
  providers: [HeroService],
  imports: [BrowserModule, FormsModule, /*HttpModule,*/ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})

export class AppModule { }
