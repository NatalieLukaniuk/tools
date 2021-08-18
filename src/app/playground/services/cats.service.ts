import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CatsService {
  imagesApi = 'https://api.thecatapi.com/v1/images/search';
  textApi = 'https://catfact.ninja/fact?max_length=140';

  constructor(private http: HttpClient) { }

  getCatImage(): Observable<any>{
    return this.http.get(this.imagesApi);
  }

  getCatText(): Observable<any>{
    return this.http.get(this.textApi);
  }
}
