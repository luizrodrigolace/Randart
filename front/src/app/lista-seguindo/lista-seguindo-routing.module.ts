import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSeguindoPage } from './lista-seguindo.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSeguindoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSeguindoPageRoutingModule {}
