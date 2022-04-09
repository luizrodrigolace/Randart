import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SeguidoresComponent } from '../components/seguidores/seguidores.component';

import { ListaSeguindoPageRoutingModule } from './lista-seguindo-routing.module';

import { ListaSeguindoPage } from './lista-seguindo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSeguindoPageRoutingModule
  ],
  declarations: [ListaSeguindoPage, SeguidoresComponent]
})
export class ListaSeguindoPageModule {}
