import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: Http) { }

  public addCategory(category: String): Promise<any> {
    return this.http.post('http://localhost:3000/addcategory',{"category_name":category}).toPromise() 
  };

  public getCategory(): Promise<any> {
    return this.http.get('http://localhost:3000/fetchcategory').toPromise()
  };
  
  public removeCategory(category: String): Promise<any> {
  return this.http.post('http://localhost:3000/deletecategory',{"category_name":category}).toPromise()
  };

  public viewAllWorkout(): Promise<any> {
    return this.http.get('http://localhost:3000/viewallworkout').toPromise()
  };
}
