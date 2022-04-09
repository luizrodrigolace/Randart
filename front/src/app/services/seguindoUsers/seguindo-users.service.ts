import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguindoUsersService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers:{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  }

  listfollowing(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'listfollowing/' + id, this.httpHeaders);
  }

}
