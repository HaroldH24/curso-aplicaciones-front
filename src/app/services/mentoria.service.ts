import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentoriaService {

  constructor(private http: HttpClient) { }

  API_URI = "http://localhost:3000";

  getMentores(){
    return this.http.get(`${this.API_URI}/mentores`)
  }

}
