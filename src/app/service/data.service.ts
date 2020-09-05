import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IMovie } from '../interface/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Array<IMovie>> {
    
    //Note: Using here a operator 'take(1)' to restrict multiple service call on subscription
    return this.http.get<Array<IMovie>>(environment.movieListUrl).pipe(take(1));
  }

}
