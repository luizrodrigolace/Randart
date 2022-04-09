import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import { AuthService } from '../app/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  token = localStorage.getItem('userToken');

  public appPages = [  
    { 
      title: 'Home',
      url: '/home',
      icon: 'home' 
    },
    
    {
      title:'Redefinir-senha',
      url: '/redefinir-senha',
      icon: 'key'
    },  

  ];
  
  constructor(
    public router: Router,
    public authService: AuthService,
    public toastController: ToastController,
    public alertController: AlertController) {

    }

    RedirectToLogin(){
      if(this.token){
        this.openToastLogged();
      }
      else{
        this.router.navigateByUrl('/login');
      }
    }


    async openToastLogged() {
      const toast = await this.toastController.create({
        message: 'Você já está logado.',
        duration:2500,
      });
      toast.present();
      }

    async openToastLogout() {
      const toast = await this.toastController.create({
        message: 'Você foi deslogado!',
        duration:1500,
      });
      toast.present();
      }

      async alertLogout() {
        const alert = await this.alertController.create({
          header: 'Deslogar!',
          message: 'Você tem certeza que quer deslogar?',
          buttons: [
            {
              text: 'Deslogar',
              cssClass: 'negativeAlertButton',
              handler: () => {
                this.logout();
                console.log('O usuário foi deslogado');
              }
            }, {
              text: 'Continuar logado',
              role: 'cancel',
              cssClass: 'positiveAlertButton',
              handler: () => {
                console.log('O usuário continua logado');
            } }
          ]
        });
        await alert.present();
      }

      async openToastLogoutFail() {
        const toast = await this.toastController.create({
          message: 'Você ainda não está logado para se desconectar.',
          duration:1500,
        });
        toast.present();
        }

  
      logout(){
        this.authService.logout().subscribe((res) => {
          console.log(res);
          localStorage.removeItem('userToken');
          localStorage.removeItem('user_id');
          localStorage.removeItem('is_admin');
          localStorage.removeItem('post_id');
          localStorage.removeItem('other_user_id');
          this.openToastLogout();
          this.router.navigate(['/login']);
          window.location.reload();
        }, (err) =>{
          console.log(err)
          this.openToastLogoutFail();
        })
      }
}
