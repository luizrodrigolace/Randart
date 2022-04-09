import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  public register(form): Observable<any>{
    return this.http.post(this.apiUrl + 'register', form, this.httpHeaders);
  }

  public login(form): Observable<any>{
    return this.http.post(this.apiUrl + 'login', form, this.httpHeaders);
  }

  public logout(): Observable<any>{
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'logout', this.httpHeaders);
  }
}
