import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicacaoPageRoutingModule } from './publicacao-routing.module';

import { PublicacaoPage } from './publicacao.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PublicacaoPageRoutingModule
  ],
  declarations: [PublicacaoPage]
})
export class PublicacaoPageModule {}
