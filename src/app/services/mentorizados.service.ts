import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorizadosService {

  constructor(private http: HttpClient) { }

  API_URI = "http://localhost:3000";

  getMentorizados(){
    return this.http.get(`${this.API_URI}/mentorizados`)
  }
}
