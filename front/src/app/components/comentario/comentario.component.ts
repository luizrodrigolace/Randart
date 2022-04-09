import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent implements OnInit {

  user_id = localStorage.getItem('user_id');
  is_admin = localStorage.getItem('is_admin');
  verifyLogged: boolean = false;
  

  
  @Input() comment;
  @Output() clickOnEdit = new EventEmitter<number>();   //Confirmar se emite 2 outputs dessa forma
  @Output() clickOnDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.isLogged();
    console.log(this.verifyLogged);
  }  

  public editMode(comment_id) {
    this.clickOnEdit.emit(comment_id);
  }

  public deleteMode(comment_id){
    this.clickOnDelete.emit(comment_id);  
  }

  isLogged(){
    if(this.user_id == this.comment.user_id){
        this.verifyLogged = true;
    }else{
        this.verifyLogged = false;
    }
  }

  isAdmin(){
    if(this.is_admin === '1'){
      return true;      
    }else{
      return false;
    }
  }


  

}
