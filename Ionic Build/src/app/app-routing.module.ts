import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    children:[{
      path:'',
      loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
    },
    {
      path:':casaId',
      loadChildren: () => import('./principal/casa-detalles/casa-detalles.module').then( m => m.CasaDetallesPageModule),

    }
  ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
