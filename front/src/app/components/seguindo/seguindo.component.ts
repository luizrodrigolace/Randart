import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seguindo',
  templateUrl: './seguindo.component.html',
  styleUrls: ['./seguindo.component.scss'],
})
export class SeguindoComponent implements OnInit {

  @Input() following;

  constructor(public router: Router) { }

  ngOnInit() {}

  redirectToProfile(id){
    localStorage.setItem('other_user_id', id);
    this.router.navigateByUrl('/perfil');
  }

}
