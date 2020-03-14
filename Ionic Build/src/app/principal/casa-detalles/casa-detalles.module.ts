import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasaDetallesPageRoutingModule } from './casa-detalles-routing.module';

import { CasaDetallesPage } from './casa-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaDetallesPageRoutingModule
  ],
  declarations: [CasaDetallesPage]
})
export class CasaDetallesPageModule {}
