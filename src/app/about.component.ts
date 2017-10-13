import { Component } from '@angular/core';

import { Router } from "@angular/router";


@Component({
    selector: 'about-component',
    template: `
  <h1>About Component .....</h1>


<ul>
<li *ngFor="let x of about; let i=index">
<a (click) ="goToAbouts(i)"> {{x}}</a>

</li>


</ul>


   `

})

export class AboutComponent {
    about: string[];



    constructor(private _router: Router) {
        this.about = ["about 1 ", "about 2 ", "about 3 "];
    }

    goToAbouts(index: number) {

        this._router.navigate(['/about'], index + 1);

    }



}