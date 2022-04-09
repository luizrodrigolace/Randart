import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers:{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  }

  createPost(form): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'posts', form, this.httpHeaders);
  }

  showPost(id): Observable<any>{
    return this.http.get(this.apiUrl + 'posts/' + id, this.httpHeaders);
  }
  
  listPosts(): Observable<any>{
    return this.http.get(this.apiUrl + 'posts', this.httpHeaders);
  }

  deletePost(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'posts/'+ id, this.httpHeaders);
  }

  public likePost(id): Observable<any>{                   //rota para curtir post de usuário
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'likes/' + id, null, this.httpHeaders);
  }

  public dislikePost(id): Observable<any>{                   //rota para descurtir post de usuário
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'dislikes/' + id, this.httpHeaders);       
  }
  
  

}
