import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguidoresUsersService } from '../services/seguidoresUsers/seguidores-users.service';

@Component({
  selector: 'app-lista-seguidores',
  templateUrl: './lista-seguidores.page.html',
  styleUrls: ['./lista-seguidores.page.scss'],
})
export class ListaSeguidoresPage implements OnInit {

  followers;

  constructor(public router: Router, public seguidoresUsersService: SeguidoresUsersService) { }

  ngOnInit() {
  }

  backProfile(){
    this.router.navigate(['/perfil']);
  }

  RedirectToOwnProfile(id){
    localStorage.getItem('user_id');
    this.router.navigateByUrl('/perfil');
  }

  listfollowers(other_user_id){                                            
    this.seguidoresUsersService.listfollowers(other_user_id).subscribe(
      (res)=> {
        this.followers = res.listfollowers;
        console.log(this.followers);      
      },
    (err) => {
      console.log(err);
    })
  } 

}
