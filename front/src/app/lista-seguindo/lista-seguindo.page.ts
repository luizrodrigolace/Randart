import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguindoUsersService } from '../services/seguindoUsers/seguindo-users.service';

@Component({
  selector: 'app-lista-seguindo',
  templateUrl: './lista-seguindo.page.html',
  styleUrls: ['./lista-seguindo.page.scss'],
})
export class ListaSeguindoPage implements OnInit {

  followings;
  other_user_id = localStorage.getItem('other_user_id');

  constructor(public router: Router, public seguindoUsersService: SeguindoUsersService) { }

  ngOnInit() {
    this.listfollowing(this.other_user_id);
  }

  backProfile(){
    this.router.navigate(['/perfil']);
  }

  RedirectToOwnProfile(id){
    localStorage.getItem('user_id');
    this.router.navigateByUrl('/perfil');
  }

  listfollowing(other_user_id){                                            
    this.seguindoUsersService.listfollowing(other_user_id).subscribe(
      (res)=> {
        this.followings = res.listfollowing;
        console.log(this.followings);      
      },
    (err) => {
      console.log(err);
    })
  } 

}
