import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';  
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.scss'],
})
export class ProfilePostComponent implements OnInit {

  @Input() post;

  user_id = localStorage.getItem('user_id');
  other_user_id = localStorage.getItem('other_user_id');
  ownProfileMode : boolean = true;
  otherProfileMode : boolean = true;

  constructor(
              public postsService: PostsService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.checkUserId();
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
            this.deleteUserPost(id);
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

  checkUserId(){
    if(this.other_user_id === this.user_id){
      this.otherProfileMode = false
    } else{
      this.ownProfileMode = false
    }
  }

  deleteUserPost(postId){
    console.log(this.post)
    this.postsService.deletePost(postId).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();                   
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
