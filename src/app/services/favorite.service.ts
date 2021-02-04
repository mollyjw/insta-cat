import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Favorite } from '../models-and-mocks/favorite.model';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  imageId: string
  private catApi: string
  constructor(private http: HttpClient) {
    this.catApi = `${environment.apiUrl}`
   }

   getAllFavorites() {
     const headers = new HttpHeaders({
       'authorization': environment.apiKey,
       'sub_id': 'user',
       'pagination-limit': '50',
       'pagination-page': '0'
     })
     return this.http.get<Favorite[]>(`${this.catApi}/favourites`, {headers})
     .pipe(
       map((data: Favorite[]) => {
         return data;
       }), catchError(error => {
         return throwError('Something went wrongo')
       })
     )
   }

   addToFavorites(image_id) {
     const body = { image_id: this.imageId}
     const headers = new HttpHeaders({
       'authorization': environment.apiKey,
       'content-type': 'application/json'
     })
     return this.http.post<Favorite>(`${this.catApi}/favourites`, {body, headers})
     .pipe(
       map((data: Favorite) => {
         return data;
       }), catchError(error => {
         return throwError('something went wrongo')
       })
     )
   }
}
