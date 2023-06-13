import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl:string = "http://localhost:3005"

  constructor(private _httpClient:HttpClient) { }



  getQuestions(ExamId:string): Observable<any>
  {
    return this._httpClient.get(`${this.baseUrl}/exams/${ExamId}`);
  }

  getCourses(): Observable<any>
  {
    return this._httpClient.get(`${this.baseUrl}/exams`);
  }


  setSutdentScore(id:string,EditObj:Student)
  {
    return this._httpClient.put(`${this.baseUrl}/users/${id}`,EditObj)
  }

}
