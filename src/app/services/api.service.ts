import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMedia } from '../interfaces/media';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string ='../../assets/data/data.json';

  constructor(private http:HttpClient) { }

  fetchMedia():Observable<IMedia[]>{
    return this.http.get<IMedia[]>(this.url);
  }



}
