import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { AuthService } from '../../app/services/auth/auth.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(
  public formbuilder: FormBuilder,
  public toastController: ToastController,
  public router: Router,
  public authService: AuthService,) { 

    this.registerForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      is_admin: 0
    });
  }

  async openToastRegister() {
    const toast = await this.toastController.create({
      message: 'O cadastro foi feito com sucesso! Você está pronto para logar.',
      duration:2500,
    });
    toast.present();
  }

  ngOnInit() {
  }

  submitForm(){
    this.authService.register(this.registerForm.value).subscribe((res) =>{
      console.log('entrei');
      this.openToastRegister();
      this.router.navigate(['/login']);      
    }, (err) =>{
      console.log(err);
    })
  }
}
