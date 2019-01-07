import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http : HttpClient) { }
  currentGenreId : string;
  getGenre()
  {
    return this.http.get<{ message:string , data:{} }>('http://localhost:8000/catalog/genre/create');
  }

  postGenre(data)
  {
    return this.http.post<{ message:string , data:{} }>('http://localhost:8000/catalog/genre/create',data);
  }

  getTopic(id)
  {
    return this.http.get<{ message:string , topics:{} }>('http://localhost:8000/catalog/topic/create',{params:{'id':id  }});
  }

  postTopic(data,id)
  {
    return this.http.post<{ message:string , data:{} }>('http://localhost:8000/catalog/topic/create/'+id,data);
  }

  getSubTopic(id1)
  {
    return this.http.get<{ message:string , subtopics:{} }>('http://localhost:8000/catalog/subtopic/create',{params:{'id1':id1  }});
  }

  postSubTopic(data,id1)
  {
    this.currentGenreId = localStorage.getItem('currentId');
    return this.http.post<{ message:string , data:{} }>('http://localhost:8000/catalog/subtopic/create/'+this.currentGenreId+'/'+id1,data);
  }
}
