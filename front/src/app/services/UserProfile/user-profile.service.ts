import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }


  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
} 
  }


  //ações pessoais do usuário
  public showUser(id): Observable<any>{                     //rotas para perfil de usuário
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'users/' + id, this.httpHeaders);
  }
//rotas para atualizar perfil de usuário
  public updateUser(id,form): Observable<any>{          
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');  
    return this.http.put(this.apiUrl + 'users/' + id, form, this.httpHeaders);
  }

  public deleteUser(id): Observable<any>{                      //rotas para excluir de perfil usuário
    return this.http.delete(this.apiUrl + 'users/' + id, this.httpHeaders);
  }

  //ações usuário->usuário
  public userFollowUser(id): Observable<any>{                   //rota para usuário seguir outro
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'follow/' + id, null, this.httpHeaders);
  }

  public followCheck(id): Observable<any>{                   //rota para checar se o usuário segue outro
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'followcheck/' + id, this.httpHeaders);
  }

  public listFollowing(id): Observable<any>{                   //rota para lista de pessoas que o usuario segue.
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'listfollowing/' + id, this.httpHeaders);
  }

  public userUnfollowUser(id): Observable<any>{                   //rota para usuário deixar de seguir outro
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'unfollow/' + id, null, this.httpHeaders);
  }


  //ações relacionadas com posts do perfil do usuário     

  public listUserPosts(id): Observable<any>{                   //rota para lista de posts
    return this.http.get(this.apiUrl + 'userposts/' + id, this.httpHeaders);
  }

  public deleteUserPost(id): Observable<any>{                   //rota para excluir post
    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'posts/' + id, this.httpHeaders);       
  }

  

}




