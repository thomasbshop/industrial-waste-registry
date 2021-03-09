import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  // // Delete a Registry.
  // public deleteRegistry(Registry_id: number) {
  //   return this.http.delete(`${this.API_URL}/Registry/${Registry_id}/`,
  //           {
  //             headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
  //           });
  // }
}
