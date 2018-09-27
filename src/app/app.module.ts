import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewAllWorkoutComponent } from './components/view-all-workout/view-all-workout.component';
import { CreateWorkoutComponent } from './components/create-workout/create-workout.component';
import { WorkoutCategoryComponent } from './components/workout-category/workout-category.component';
import { WorkoutTrackComponent } from './components/workout-track/workout-track.component';
import {appRouting} from './app.routing'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ViewAllWorkoutComponent,
    CreateWorkoutComponent,
    WorkoutCategoryComponent,
    WorkoutTrackComponent
  ],
  imports: [
    BrowserModule,appRouting,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
