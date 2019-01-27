import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  isAuthenticated=false;
  constructor(private http : HttpClient) { }
  currentGenreId : string;

  signup(data)
  {
     return this.http.post<{ message:string , result:{} }>('users/signup',data);
  }

  login(data)
  {
      return this.http.post<{ message:string , result:{} , isAuthenticated:Boolean }>('users/login',data);
  }

  getGenre()
  {
    return this.http.get<{ message:string , data:{} }>('catalog/genre/create');
  }

  postGenre(data)
  {
    return this.http.post<{ message:string , data:{} }>('catalog/genre/create',data);
  }

  deleteGenre(id)
  {
    return this.http.delete<{ message:string }>('catalog/genre/delete/'+id);
  }

  getTopic(id)
  {
    return this.http.get<{ message:string , topics:{} , genre:string }>('catalog/topic/create',{params:{'id':id  }});
  }

  postTopic(data,id)
  {
    return this.http.post<{ message:string , data:{} }>('catalog/topic/create/'+id,data);
  }

  deleteTopic(idT,idG)
  {
    return this.http.delete<{ message:string }>('catalog/topic/delete/'+idG+'/'+idT);
  }

  getSubTopic(id1)
  {
    return this.http.get<{ message:string , subtopics:{} , topic:string }>('catalog/subtopic/create',{params:{'id1':id1  }});
  }

  postSubTopic(data,id1)
  {
    this.currentGenreId = localStorage.getItem('currentId');
    return this.http.post<{ message:string , data:{} }>('catalog/subtopic/create/'+this.currentGenreId+'/'+id1,data);
  }

  deleteSubTopic(idT,idS)
  {
    return this.http.delete<{ message:string }>('catalog/subtopic/delete/'+idT+'/'+idS);
  }
}
