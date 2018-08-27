import { RouterModule, Routes } from '@angular/router';
import {ViewAllWorkoutComponent} from './components/view-all-workout/view-all-workout.component';
import {CreateWorkoutComponent} from './components/create-workout/create-workout.component';
import {WorkoutCategoryComponent} from './components/workout-category/workout-category.component';
import {WorkoutTrackComponent} from './components/workout-track/workout-track.component'

const routes: Routes = [
    { path: '', component: ViewAllWorkoutComponent },
    { path: 'create', component: CreateWorkoutComponent },
    { path: 'category', component: WorkoutCategoryComponent },
    { path: 'track', component: WorkoutTrackComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);