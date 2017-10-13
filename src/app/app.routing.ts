import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { CoursesComponent } from './courses.component';
import { SingleCourseComponent } from './single_course.component';
import {    SingleAboutComponent } from "./single_about.component";

import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";

// Router Class 

const app_routes: Routes = [

    {
        path: '',
        component: HomeComponent


    }, {
        path: 'courses'
        ,
        component: CoursesComponent


    }, 
    {
        path: 'courses/:id'
        ,
        component: SingleCourseComponent


    }, {
        path: 'about'
        ,
        component: AboutComponent



    },
    {
        path: 'about/:id'
        ,
        component: SingleAboutComponent



    }
    , {
        path: 'first',
        component: FirstComponent


    }
      , {
        path: 'second',
        component: SecondComponent


    }

];
export const routers: ModuleWithProviders = RouterModule.forRoot(app_routes);

