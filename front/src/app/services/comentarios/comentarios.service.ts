import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers:{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  }

  createComment(form): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'comments', form, this.httpHeaders);
  }  
  
  listComments(id): Observable<any>{
    return this.http.get(this.apiUrl + 'listcomment/' + id, this.httpHeaders);
  }  

  updateComment(id, form): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'comments/' + id, form, this.httpHeaders);
  }

  deleteComment(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'comments/' + id, this.httpHeaders);
  }
}

