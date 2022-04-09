import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.scss'],
})
export class SeguidoresComponent implements OnInit {

  @Input() follower;

  constructor( public router: Router) { }

  ngOnInit() {}

  redirectToProfile(id){
    localStorage.setItem('other_user_id', id);
    this.router.navigateByUrl('/perfil');
  }

}
