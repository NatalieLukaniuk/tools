import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  catsApi = 'https://api.thecatapi.com/v1/breeds/abob';

  constructor(private http: HttpClient) { }

  getCat(): Observable<any>{
    return this.http.get(this.catsApi).pipe(
      map((response: any) => {
        const origin = response.origin;
        const name = response.name;
        const description = response.description;
        const cat = {
          origin,
          description,
          name
        };
        console.log({origin, name, description});
        return {origin, name, description};
      }),
      catchError(err => {
        console.log(err);
        return of([]);
      })
  );
  }
}
