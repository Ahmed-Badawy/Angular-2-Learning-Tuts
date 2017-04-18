import { Component } from '@angular/core';

@Component({
  selector: 'page2',
  template: `
  <h1>this is page2</h1>
  <a [routerLink]="['/page4', 16]"  class="col-1-4">Link To page 4 with router param 16</a>

  `
})

export class Page2{

}