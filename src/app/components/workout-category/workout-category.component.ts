import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-category',
  templateUrl: './workout-category.component.html',
  styleUrls: ['./workout-category.component.css']
})
export class WorkoutCategoryComponent implements OnInit {
  categories = ['jogging','walking']
  constructor() { }

  ngOnInit() {
  }

  addCategory(category){
    console.log(category)
  }
}
