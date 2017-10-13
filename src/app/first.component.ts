import { Component } from '@angular/core';
import { friend, course } from './interfaces.module';
@Component({
    selector: 'first-component',
    template: `
  <div class="alert row alert-success">{{name}}</div>
  <div class="alert row alert-success">{{age}}</div>
    <h4>Friends .... </h4>
  
  <ul>
  <li *ngFor="let x of friends ; let i=index">
  {{i+1}} - {{x.name}} , {{x.age}}
  
  </li>
  </ul>

  <div *ngIf="courses.length > 0">
  <h4>Courses .... </h4>
    <ul>
  <li *ngFor="let c of courses">
  {{c.course_name}} , {{c.course_code}}
  
  </li>
  </ul>
  </div>

<br>
<button (click)="ClickMe(nameInput.value)" class="btn"> Click Me </button>


<hr />
<div class="row"> <div class="form-group col-md-6">
<label >Name : </label>
<input type="text"  #nameInput class="form-control"/>

</div></div>
 

 <hr/>
 <h3>arrays : </h3>
<ul>
<li *ngFor="let r of arrays">{{r}}</li>

</ul>
 <div class="row"> <div class="form-group col-md-6">
<label >Add Array : </label>
<input type="text"  #ArrayInput class="form-control"/>
<br>
<button (click)="AddArray(ArrayInput.value)" class="btn"> Add Array </button>


<hr/>

<h4>Two ways Binding</h4>

<h5>{{country}}</h5>
<div class="row"> <div class="form-group col-md-6">
<label >Country : </label>
<input type="text"  [(ngModel)]="country" class="form-control"/>




</div></div>

<second-component></second-component>


  `,
})
export class FirstComponent {

    name: string;
    age: number;
    country: string;
    courses: course[];
    friends: friend[];
    arrays: any[];
    constructor() {

        this.name = "ahmed mohamed";
        this.age = 25;
        this.courses = [{ course_name: "java", course_code: 123 }, { course_name: "paython", course_code: 12483 }, { course_name: "paython" }];
        this.friends = [{ name: "ahmed", age: 50 }, { name: "lolo", age: 20 }];
        this.arrays = ["java", "php", "js"];
        this.country = "Egypt";

    }
    ClickMe(value: string) {
        console.log("Done ya man ");
        this.name = value;

    }
    AddArray(value: string) {

        this.arrays.push(value);

    }


}