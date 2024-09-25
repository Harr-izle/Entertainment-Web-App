import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Media} from '../interfaces/media'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = '../../assets/data/data.json';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<Media[]> {
    return this.http.get<Media[]>(this.apiUrl);
  }
}