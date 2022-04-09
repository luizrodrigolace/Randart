import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSeguidoresPageRoutingModule } from './lista-seguidores-routing.module';

import { ListaSeguidoresPage } from './lista-seguidores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSeguidoresPageRoutingModule
  ],
  declarations: [ListaSeguidoresPage]
})
export class ListaSeguidoresPageModule {}
