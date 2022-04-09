import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";
import { PostsService } from 'src/app/services/posts/posts.service';
  

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.page.html',
  styleUrls: ['./publicacao.page.scss'],
})
export class PublicacaoPage implements OnInit {
  
  postForm: FormGroup;
  post_id = localStorage.getItem('post_id');
  user_id = localStorage.getItem('user_id'); 
  
  
  constructor(public formbuilder: FormBuilder,
              public toastController: ToastController,
              public router: Router,             
              public postsService: PostsService) { 

    this.postForm = this.formbuilder.group({
      text: [null, [Validators.required, Validators.maxLength(120)]],
      category: [null, [Validators.required, Validators.maxLength(15)]]
    });
  }

  async openToastChosenMedia() {
    const toast = await this.toastController.create({
      message: 'O upload da mídia ocorreu corretamente!',
      duration:1000,                                                                  
      color: 'warning',
    });
    toast.present();
  }

  async openToastPost() {
    const toast = await this.toastController.create({
      message: 'O post foi publicado com sucesso!',
      duration:1500,
      color: 'warning',
    });
    toast.present();
  }

  ngOnInit() { 
  }
  
  sendPost(){
    let form = this.postForm.value;
    form.post_id = this.user_id;
    this.postsService.createPost(form).subscribe(
      (res)=>{
        this.openToastPost();
        console.log(res);        
        this.router.navigate(['/home']);     
        this.postForm.reset();          
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
