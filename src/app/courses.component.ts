import { Component } from '@angular/core';

import { Router } from "@angular/router";


@Component({
    selector: 'courses-component',
    template: `
  <h1>courses Component .....</h1>
<ul>
<li *ngFor="let x of courses ;let i =index">
<a (click)="goToCourses(i)">{{x}}</a>

 </li>


</ul>


   `

})

export class CoursesComponent {


    courses: string[];

    constructor(private _router: Router) {
        this.courses = ["ahmed", "mohamed", "eslam"];
    }
    goToCourses(index: number) {

        this._router.navigate(['/courses', index + 1]);

    }




}