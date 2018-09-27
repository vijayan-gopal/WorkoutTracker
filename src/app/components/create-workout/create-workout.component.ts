import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  categories = []
  count: number = 0
  show: boolean = false
  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getCategory()
    .then(res=>{
      this.categories = res.json()
    })
  }
  toggleShow(){
    this.show = !this.show
  }
  addWorkout(workoutForm: NgForm){
    var workoutReq = {"workout_title":workoutForm.value.title,
                      "workout_note":workoutForm.value.note,
                      "calories_burn_per_min":workoutForm.value.calvalue,
                      "category_id": "",
                      "category_name":workoutForm.value.category}
    this.workoutService.addWorkout(workoutReq)
    .then(res=>{
      console.log(res)
    })
  }

  test(){
    console.log('test')
  }
 

}
