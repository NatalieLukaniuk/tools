import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
api = 'http://thecolorapi.com/id?hex=';
  constructor(public http: HttpClient) { }

  convert(color){
    return this.http.get(`${this.api}${color}`);
  }
}
