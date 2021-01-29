import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cat } from '../models-and-mocks/cat.model';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private catApi: string
  constructor(private http: HttpClient) {
    this.catApi = `${environment.apiUrl}`
   }

   getAllCats() {
     const headers = new HttpHeaders({
       'authorization': environment.apiKey,
       'pagination-limit': '100',
       'pagination-page': '0'
     })
     return this.http.get<Cat[]>(`${this.catApi}/images/search?limit=100`, {headers})
      .pipe(
        map((data: Cat[]) => {
          return data;
        }), catchError( error => {
          return throwError( 'Something went wrong');
        })
      )
   }

   getCatbyId(params) {
     const headers = new HttpHeaders({
       'authorization': environment.apiKey
     })
     return this.http.get<any>(`${this.catApi}/images/${params.id}`)
   }
}
