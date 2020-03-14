import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaDetallesPage } from './casa-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: CasaDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasaDetallesPageRoutingModule {}
