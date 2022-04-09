import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeguidoresUsersService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers:{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
  }

  listfollowers(id): Observable<any>{
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'listfollowers/' + id, this.httpHeaders);
  }

}
