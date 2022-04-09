import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  ChangePasswordForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router) {
      this.ChangePasswordForm = this.formbuilder.group({
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
      });
    }

  async presentToast(){
    const toast = await this.toastController.create({
      message:'Sua senha foi redefinida com sucesso.',
      duration: 1500
    });
    toast.present();
  }
  
  ngOnInit() {
  }

  submitForm(ChangePasswordForm){
    console.log(ChangePasswordForm);
    console.log(ChangePasswordForm.value);
    this.presentToast()
    this.router.navigate(['/login']); 
  }

  backLogin(){
    this.router.navigate(['/login']);
  }

}
