import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-view-all-workout',
  templateUrl: './view-all-workout.component.html',
  styleUrls: ['./view-all-workout.component.css']
})
export class ViewAllWorkoutComponent implements OnInit {
  workout_collection = []
  constructor(private http: Http,private workoutservice: WorkoutService) { }

  ngOnInit() {
    this.workoutservice.viewAllWorkout()
    .then(res=>{
      this.workout_collection = res.json()
      console.log(this.workout_collection[0])
    })
  }

}
