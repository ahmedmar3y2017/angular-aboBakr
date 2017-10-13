import { Component } from '@angular/core';
import { friend, course } from './interfaces.module';
import { EventEmitter } from '@angular/core';
import { RouterOutlet , RouterModule } from '@angular/router'
@Component({
    selector: 'home-component',
    template: `
  <h1>Home Component .....</h1>
   <div class ="row">
  <hr/>
<a [routerLink]='["/first"]' class="btn btn-default col-md-4 ">First Component</a>
<a [routerLink]='["/second"]' class="btn btn-default col-md-4 ">Second Component</a>


  
  </div>
  <hr/>
  <div class="row"> 

  <router-outlet></router-outlet>
  </div>
   `

})

export class HomeComponent {

    constructor() {

    }





}