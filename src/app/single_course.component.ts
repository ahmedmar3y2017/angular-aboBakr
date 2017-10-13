import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'single-course-component',
    template: `
  <h1>Single Course Component .....</h1>
<h1>Course Index : {{courses[id]}}</h1>


   `

})

export class SingleCourseComponent {

    id: number;
    courses: string[];

    constructor(private route: ActivatedRoute, private _router: Router) {
        this.courses = ["ahmed", "mohamed", "eslam"];

    }


    // to load when component start 
    ngOnInit() {
        console.log("Done");

        this.id = this.route.snapshot.params['id'];
        this.id -= 1;


        // if index >course .length
        // navigte to another page  
        if (this.courses.length <= this.id) {
            this._router.navigate(['/courses']);


        }

    }



}