import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';             //Output, EventEmitter
import { Router } from '@angular/router';
import { ToastController, AlertController} from '@ionic/angular';
import { PostsService } from '../../services/posts/posts.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post;
  @Output() clickOnDelete = new EventEmitter<number>();


  likeIcon: string = "heart-outline";

  is_admin = localStorage.getItem('is_admin');
  user_id = localStorage.getItem('user_id');

  constructor(public router: Router,
              public toastController: ToastController, 
              public alertController: AlertController,
              public postsService: PostsService) { }

  ngOnInit() {
    this.isAdmin();
  }
  
  public deleteMode(post_id){
    this.clickOnDelete.emit(post_id);  
  }


  getId(id){
    localStorage.setItem('post_id', id);
    this.router.navigateByUrl('/post');
  }

    RedirectToProfile(id){
    localStorage.setItem('other_user_id', id);
    this.router.navigateByUrl('/perfil');
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

  likePost(id){
    this.postsService.likePost(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
  }

  dislikePost(id){
    this.postsService.dislikePost(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
  }

  likeAction(id){
    localStorage.setItem('post_id', id);
    if(this.likeIcon === "heart-outline"){
      this.likeIcon = "heart";
      this.openToastLike()
      this.likePost(id);
      console.log('O post foi curtido')
    } else if(this.likeIcon === "heart"){
      this.likeIcon = "heart-outline"
      this.openToastDislike()
      this.dislikePost(id);
      console.log('O post foi descurtido')
    }
  }


  isAdmin(){
    if(this.is_admin === '1' || this.user_id == this.post.user.id){
      return true;      
    }else{
      return false;
    }
  }
}
