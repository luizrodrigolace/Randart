import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePostComponent } from '../components/profile-post/profile-post.component';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PerfilPageRoutingModule
  ],
  declarations: [PerfilPage, ProfilePostComponent]
})
export class PerfilPageModule {}
