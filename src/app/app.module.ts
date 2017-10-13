import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from './first.component';
 import { SecondComponent } from './second.component';
 import { ChildComponent } from './child.component';
 import { HomeComponent } from './home.component';
 import { AboutComponent } from './about.component';
 import { CoursesComponent } from './courses.component';
 import { StartComponent } from './start.component';


import {  SingleAboutComponent } from "./single_about.component";
 import { SingleCourseComponent } from './single_course.component';



import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routers } from "./app.routing";

@NgModule({
  imports: [BrowserModule, FormsModule,routers],
  declarations: [AppComponent, FirstComponent , SecondComponent ,ChildComponent , HomeComponent,StartComponent , AboutComponent , CoursesComponent , SingleCourseComponent , SingleAboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
