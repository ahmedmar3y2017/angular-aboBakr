import { Component } from '@angular/core';
import { friend, course } from './interfaces.module';
@Component({
    selector: 'second-component',
    template: `
    <h1>ahmed mohamed mar3y</h1>
<h1>Child Date is : {{childDate}}</h1>

    <div class="row">
    <div class="row-group col-md-6">
    <label >Name : </label>
    

<input  type="text" #InputName (keyup)="0" class="form-control"/>

    </div>
    
    </div>
    
    
    <hr/>

    <div class="col-md-10 alert alert-warning">


<child-component (childEvent)="childDate=$event" [name]="InputName.value"></child-component>

    </div>
    

<div class="row">
<hr />



    `
    ,

})

export class SecondComponent {
    name: string;

    childDate:string;
    constructor() {
        this.name = "ahmed mohamed";

    }


}