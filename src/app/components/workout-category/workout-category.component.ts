import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { WorkoutService } from '../services/workout.service';


@Component({
  selector: 'app-workout-category',
  template: `
  <div class="grp1">
    <label for="text">Add Category</label><br>
    
    <form>
    <div class="input-group mb-3">
        <input id="catIn" type="text" #category (change)="0" aria-label="Category Name" aria-describedby="button-addon2" size="97">
        <div class="input-group-append col-2">
          <button (click)="addCategory(category.value)" class="btn btn-secondary w-50" type="button" id="button-addon2">+</button>
        </div>
    </div>
    </form>
  </div>

<div *ngIf="succ_message != ''" class="alert alert-success" role="alert">
  {{succ_message}}
</div>
<div *ngIf="err_message != ''" class="alert alert-warning" role="alert">
  {{err_message}}
</div>

<ul *ngFor="let category of categories" class="list-group">
 <div class="input-group mb-2">  
  <li id="category" class="list-group-item w-50 mb-4">{{category.category_name}}</li>
      <div class="input-group-append">  
        <div class="btn-group mb-4 col-4" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">Edit</button>
        </div>
        <div class="btn-group mb-4 mw-4 w-25 col-6" role="group" aria-label="Second group">
            <button (click)="deleteCategory(category.category_name)" type="button" class="btn btn-secondary">Delete</button>
        </div>  
      </div>
      </div>
</ul>
  `,
  styleUrls: ['./workout-category.component.css']
})
export class WorkoutCategoryComponent implements OnInit {
  categories = []
  succ_message: string = ''
  err_message: string = ''
  constructor(private http: Http,private workoutservice: WorkoutService) { }

  ngOnInit() {
    this.workoutservice.getWorkout()
    .then(res=>{
      this.categories = res.json()
    })
  }

  addCategory(category){
    this.succ_message = ''
    this.err_message = ''
    this.workoutservice.addWorkout(category)
    .then(res=>{
        this.succ_message = res.json().message
        this.workoutservice.getWorkout()
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
   this.workoutservice.removeWorkout(category) 
   .then(res=>{this.succ_message = res.json().message
      this.workoutservice.getWorkout()
      .then(res=>{
        this.categories = res.json()
      }).catch(res=>{
        this.err_message = res.json().message})
    }).catch(res=>{
        this.err_message = res.json().message})
  };
}
