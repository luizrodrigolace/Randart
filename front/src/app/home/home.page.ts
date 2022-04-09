import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service'; 
import { ToastController, AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts;

  user_id = localStorage.getItem('user_id');
  other_user_id = localStorage.getItem('other_user_id');
  

  constructor(public postsService: PostsService, 
              public toastController: ToastController, 
              public alertController: AlertController,
              public router: Router) { }   

  
  RedirectToOwnProfile(){
    localStorage.setItem('other_user_id', this.user_id)
    this.router.navigateByUrl('/perfil');
  }
 

  RedirectToProfile(id){
    localStorage.getItem('user_id');
    this.router.navigateByUrl('/perfil');
  }

  RedirectToPost(){
    this.router.navigateByUrl('/post');
  }

  

  async openToastDelete() {
    const toast = await this.toastController.create({
      message: 'Post deletado!',
      duration:1000,
      color: 'warning',
    });
    toast.present();
  }
  
  async openToastDeleteError() {
    const toast = await this.toastController.create({
      message: 'Ops, houve um problema!',
      duration:1000,
      color: 'warning',
    });
    toast.present();
  }

  async alertDeletePost(id) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Você está prestes a excluir este post:',
      buttons: [
        {
          text: 'Continuar',
          cssClass: 'negativeAlertButton',
          handler: () => {
            this.deletePost(id);
            console.log('O comentário foi deletado!');
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'positiveAlertButton',
          handler: () => {
            console.log('A tentativa de deletar o comentário foi abortada.');
        } }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.listPosts();
  }

  listPosts(){                                            
    this.postsService.listPosts().subscribe(
      (res)=> {
        this.posts = res.post;
        console.log(this.posts);      
      },
    (err) => {
      console.log(err);
    })
  }  

  deletePost(id){
    this.postsService.deletePost(id).subscribe(
      (res)=>{
        this.openToastDelete();
        this.listPosts();                   
      },
      (err)=>{
        this.openToastDeleteError();
        console.log(err);
      })
  }
}
