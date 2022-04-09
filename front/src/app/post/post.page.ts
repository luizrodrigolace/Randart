import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';
import { ComentariosService } from 'src/app/services/comentarios/comentarios.service';
import { ToastController , AlertController} from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {  
  
  post = [];


  comments;

  comment_id;
  editMode = false;

  commentForm  : FormGroup; 
  editCommentForm: FormGroup;

  favoriteIcon : string = "heart-outline";
  post_id = localStorage.getItem('post_id');
  user_id = localStorage.getItem('user_id');


  constructor(public formbuilder: FormBuilder,
              public postsService: PostsService, 
              public comentariosService: ComentariosService,
              public toastController: ToastController,
              public alertController: AlertController,
              private router: Router) { 

    this.commentForm= this.formbuilder.group({
      text: [null, [Validators.maxLength(118)]]
    })
    this.editCommentForm = this.formbuilder.group({
      text: [null, [Validators.maxLength(118)]]
    })
  }


  async openToastDeleteError() {
    const toast = await this.toastController.create({
      message: 'Ops, este comentário não foi feito por você! Não é possível excluí-lo.',
      duration:2300,
      color: 'warning',
    });
    toast.present();
  }

  async openToastDelete() {
    const toast = await this.toastController.create({
      message: 'Você deletou o seu comentário!',
      duration:1000,
      color: 'warning',
    });
    toast.present();
  }

  async openToastLike() {
    const toast = await this.toastController.create({
      message: 'Você curtiu a postagem!',
      duration:1000,
      color: 'warning',
    });
    toast.present();
  }

  async openToastDislike() {
    const toast = await this.toastController.create({
      message: 'Você descurtiu a postagem!',
      duration:1000,
      color: 'warning',
    });
    toast.present();
  }

  async alertDeleteComment(id) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Você está prestes a excluir este comentário',
      buttons: [
        {
          text: 'Continuar',
          cssClass: 'negativeAlertButton',
          handler: () => {
            this.deleteComment(id);
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
    this.showPost();
    this.listComments();
  }

  backHome(){
    this.router.navigate(['/home']);
  }

  likeAction(){
    if(this.favoriteIcon === "heart-outline"){
      this.favoriteIcon = "heart";
      this.openToastLike();
      console.log('O post foi curtido')
    } else if(this.favoriteIcon === "heart"){
      this.favoriteIcon = "heart-outline"
      this.openToastDislike();
      console.log('O post foi descurtido')
    }
  }    
   
  showPost(){
    this.postsService.showPost(this.post_id).subscribe(
      (res) => {
        this.post = res.post;
        console.log(this.post);
      },
      (err)=> {
        console.log(err);
      }
    )
  }
  
  sendComment(){
    let form = this.commentForm.value;
    form.post_id = this.post_id;
    console.log(form);
    this.comentariosService.createComment(form).subscribe(
      (res)=>{
        console.log(res);
        this.commentForm.reset();
        this.listComments();
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  async listComments(){
    await this.comentariosService.listComments(this.post_id).subscribe(
      (res)=>{
        console.log(res.list_comment);
        this.comments= res.list_comment;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  toggleEdit(id){
    this.comment_id = id;
    this.editMode = true;    
  }

  updateComment(){
    let form = this.editCommentForm.value;
    this.comentariosService.updateComment(this.comment_id, form).subscribe(
      (res)=>{
        this.editCommentForm.reset();
        this.editMode = false;
        this.listComments();           
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  deleteComment(id){
    this.comentariosService.deleteComment(id).subscribe(
      (res)=>{
        this.openToastDelete();
        this.listComments();                   
      },
      (err)=>{
        this.openToastDeleteError();
        console.log(err);
      })
  }


  

}
