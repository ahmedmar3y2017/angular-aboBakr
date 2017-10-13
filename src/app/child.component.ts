import { Component } from '@angular/core';
import { friend, course } from './interfaces.module';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
  
    <hr>
   My Name is : {{name}}
     <div class="row">
    <div class="row-group col-md-6">
 <label >Country : </label>
    

<input  type="text" #InputCountry (keyup)="SendToParent(InputCountry.value)" class="form-control"/>
    </div>
    </div>
   
   
    `


    ,
    inputs :["name"] ,
    outputs :["childEvent"]

})

export class ChildComponent {
    name: string;

childEvent=new EventEmitter<string>();

    constructor() {
        this.name = "ahmed mohamed";

    }

    SendToParent(value:string){

this.childEvent.emit(value);



    }


}