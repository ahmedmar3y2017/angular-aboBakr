import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'single-course-component',
    template: `

Single About Component {{name}}

<br>
<h1>about is : {{about[id]}}</h1>


   `

})

export class SingleAboutComponent {


    about: string[];
    id: number;

    name: string;
    constructor(private route: ActivatedRoute, private _router: Router) {
        this.about = ["about 1", "about 2 ", "about 3 "];

        this.name = "ahmed mohamed";
    }
    // to load when component start 
    ngOnInit() {
        console.log("Done");

        this.id = this.route.snapshot.params['id'];
        this.id -= 1;


        // if index >course .length
        // navigte to another page  
        if (this.about.length <= this.id) {
            this._router.navigate(['/about']);


        }




    }