import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router:Router,
    public toastController: ToastController){

  }

  async openToastNotLoggedIn() {
    const toast = await this.toastController.create({
      message: 'É necessário estar logado para acessar essa página',
      duration:2500,
    });
    toast.present();
    }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('userToken')){
      return true;
    }
    else{
      this.openToastNotLoggedIn();
      return this.router.navigate(['/login']);
    }
  }
  
}
