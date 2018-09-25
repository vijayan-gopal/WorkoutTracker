import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WorkoutService } from '../../services/workout.service';


@Component({
  selector: 'app-workout-category',
  templateUrl: './workout-category.component.html',
  styleUrls: ['./workout-category.component.css']
})
export class WorkoutCategoryComponent implements OnInit {
  categories = []
  succ_message: string = ''
  err_message: string = ''
  constructor(private http: Http,private workoutservice: WorkoutService) { }

  ngOnInit() {
    this.workoutservice.getCategory()
    .then(res=>{
      this.categories = res.json()
    })
  }

  addCategory(category){
    this.succ_message = ''
    this.err_message = ''
    this.workoutservice.addCategory(category)
    .then(res=>{
        this.succ_message = res.json().message
        this.workoutservice.getCategory()
        .then(res=>{
              this.categories = res.json()
         }).catch(res=>{
              this.err_message = res.json().message})
      }).catch(res=>{
              this.err_message = res.json().message})
  };

  deleteCategory(category){
   this.succ_message = ''
   this.err_message = ''
   this.workoutservice.removeCategory(category) 
   .then(res=>{this.succ_message = res.json().message
      this.workoutservice.getCategory()
      .then(res=>{
        this.categories = res.json()
      }).catch(res=>{
        this.err_message = res.json().message})
    }).catch(res=>{
        this.err_message = res.json().message})
  };
}
