import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PostProfile, Profile } from './interfaces/profile';
import { AuthService } from './auth/auth.service';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL =  environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  public getProfiles(): Observable<Profile[]> {
    console.log(`earer ${this.auth.accessToken}`)
    return this.http.get<Profile[]>(`${this.API_URL}/profile/`, 
                    {
                      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
                    });
  }

  // Create a registry.
  public postRegistry(new_registry: PostProfile) {
    return this.http.post(`${this.API_URL}/profile/`, new_registry,
            {
              headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            });
  }

  // // Update a Registry.
  // public putRegistry(the_Registry: Registry) {
  //   return this.http.put(`${this.API_URL}/Registry/${the_Registry.id}/`,the_Registry,
  //           {
  //             headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
  //           });
  // }

  // Delete a Registry.
  public deleteRegistry(profile_id: number): any{
     this.http.delete(`${this.API_URL}/profile/${profile_id}/`,
            {
              headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            }).subscribe(data => {
              console.log(data);
            });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
