import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProfileService } from '../services/UserProfile/user-profile.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  editNameForm: FormGroup;
  editCategoryForm: FormGroup;
  editBioForm: FormGroup;

  user = [];
  posts;
  followingList;
  followersList;


  user_id = localStorage.getItem('user_id');
  other_user_id = localStorage.getItem('other_user_id');
  post_id = localStorage.getItem('post_id');
  
  ownProfileMode : boolean = true;
  otherProfileMode : boolean = true;
  editMode : boolean = false;
  followingMode: boolean = true;
  checkedUser: boolean;

  constructor(
    public userprofileService: UserProfileService,
    public formbuilder: FormBuilder,
    public router: Router) {


      this.editNameForm = this.formbuilder.group({
        name: [null, [Validators.required, Validators.maxLength(20)]],
      });
      this.editCategoryForm = this.formbuilder.group({
        category: [null, [Validators.required, Validators.maxLength(15)]],
      });
      this.editBioForm = this.formbuilder.group({
        bio: [null, [Validators.required, Validators.maxLength(50)]],
      });
  
     }

  ngOnInit() {
    this.followCheck()
    this.listFollowing()
    this.checkUserId();
    this.showUser();
    this.listUserPosts(); 
  }

  RedirectToFollowingList(){
    this.router.navigateByUrl('/lista-seguindo');
  }

  RedirectToFollowersList(){
    this.router.navigateByUrl('/lista-seguidores');
  }


  checkUserId(){
    if(this.other_user_id === this.user_id){
      this.otherProfileMode = false
    } else{
      this.ownProfileMode = false
    }
  }

  RedirectToOwnProfile(){
    localStorage.setItem('other_user_id', this.user_id)
    this.router.navigateByUrl('/perfil');
    window.location.reload();
  }

  saveChanges(form){
    console.log(form.value)
    console.log(this.editCategoryForm);
    console.log(this.user_id);
    this.userprofileService.updateUser(this.user_id, form.value).subscribe((res) =>{
      console.log(res); 
      window.location.reload();
    })
  }

  showUser(){
    console.log(this.other_user_id);
    this.userprofileService.showUser(this.other_user_id).subscribe(
      (res) => {
        this.user = res.user;
        console.log(this.user);
      },
      (err)=> {
        console.log(err);
      }
    )
  }


  listUserPosts(){
    this.userprofileService.listUserPosts(this.other_user_id).subscribe(
      (res) => {
        this.posts = res.list_posts;
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
  }


    changeTemplateAction(){
    if (this.editMode === this.editMode){
      this.editMode = !this.editMode;
      console.log(this.editMode)
    }
  }

  
  userFollowUser(){
    this.userprofileService.userFollowUser(this.other_user_id).subscribe(
      (res) => {
        this.followingMode = !this.followingMode;
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
  }

  userUnfollowUser(){
    this.userprofileService.userUnfollowUser(this.other_user_id).subscribe(
      (res) => {
        this.followingMode = !this.followingMode;
        console.log(res);
      },
      (err) => {
        console.log(err);
      })
  }

  listFollowing(){
    this.userprofileService.listFollowing(this.other_user_id).subscribe(
      (res) =>{
        console.log(res);
        this.followingList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }


  followCheck(){
    this.userprofileService.followCheck(this.other_user_id).subscribe(
      (res) =>{
        console.log(res);
        this.checkedUser = res
        this.CheckUserFollowsUser()
        
      },
      (err) => {
        console.log(err);
      }
    )
  }


  CheckUserFollowsUser(){
    if (this.checkedUser == true){
      this.followingMode = true
    } else{
      this.followingMode = false
    }
  }


}
