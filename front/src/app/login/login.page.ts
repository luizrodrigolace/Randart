import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { AuthService } from '../../app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  
  constructor(
    public formbuilder: FormBuilder,
    public toastController: ToastController,
    public router: Router,
    public authService: AuthService){

    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });

   }

   async openToastLogin() {
    const toast = await this.toastController.create({
      message: 'O login foi feito com sucesso! Você está pronto para navegar pelo Randart.',
      duration:1500,
    });
    toast.present();
    }

  ngOnInit() {
  }

  setIdUser(id){
    localStorage.setItem('user_id', id);
  }

  setIs_Admin(id){
    localStorage.setItem('is_admin', id);
  }
  

  login(form){
    console.log(this.loginForm);
    this.authService.login(form.value).subscribe((res) =>{
      console.log(res); 
      localStorage.setItem('userToken', res.token)
      this.setIdUser(res.user.id);
      this.setIs_Admin(res.user.is_admin);
      this.openToastLogin();
      window.location.reload();
    })
  }
}
