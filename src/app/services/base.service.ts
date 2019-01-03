import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http : HttpClient) { }

  getGenre()
  {
    return this.http.get<{ message:string , data:{} }>('http://localhost:8000/catalog/genre/create');
  }

  postGenre(data)
  {
    return this.http.post<{ message:string , data:{} }>('http://localhost:8000/catalog/genre/create',data);
  }
}
