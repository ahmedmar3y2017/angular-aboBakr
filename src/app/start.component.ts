import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { RouterModule } from '@angular/router';


@Component({
    selector: 'start-component',
    template: `
  <div class ="row">
  <hr/>
<a [routerLink]='["/"]' class="btn btn-default col-md-4 ">Home</a>
<a [routerLink]='["/courses"]' class="btn btn-default col-md-4 ">Courses</a>
<a [routerLink]='["/about"]' class="btn btn-default col-md-4 ">About</a>


  
  </div>
  <hr/>
  <div class="row"> 

  <router-outlet></router-outlet>
  </div>
   `

})

export class StartComponent {

    constructor() {

    }





}