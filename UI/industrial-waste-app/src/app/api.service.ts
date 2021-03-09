import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './interfaces/profile';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL =  environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.API_URL}/profile/`);
  }
}
