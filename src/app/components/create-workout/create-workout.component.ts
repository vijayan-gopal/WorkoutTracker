import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  categories = []
  count: number = 0
  constructor() { }

  ngOnInit() {
  }

  incrementCalories(){
  }

}
