import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSeguidoresPage } from './lista-seguidores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSeguidoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSeguidoresPageRoutingModule {}
