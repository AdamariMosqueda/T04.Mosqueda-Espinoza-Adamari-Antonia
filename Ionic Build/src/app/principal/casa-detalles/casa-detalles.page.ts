import { PrincipalService } from './../principal.service';
import { Component, OnInit } from '@angular/core';
import { principal } from '../principal.model';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-casa-detalles',
  templateUrl: './casa-detalles.page.html',
  styleUrls: ['./casa-detalles.page.scss'],
})
export class CasaDetallesPage implements OnInit {
casaDetail: principal;
  constructor(private principalService:PrincipalService, private activatedRoute:ActivatedRoute,
    private route:Router, public alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('casaId')){
        return;
      }
      const casaId=paraMap.get('casaId');
      this.casaDetail=this.principalService.getCasaDetail(casaId);
    });
  }
  onDeleteCasa(){
    this.alertController.create({
      header: "Eliminar Casa",
      message: "¿Desea eliminar esta casa de Garreg Mach Monastery?",
      buttons: [{
      text: "Cancelar",
      role: "cancel"
    },
    {
    text: "Eliminar",
    handler: ()=> {
    
      this.principalService.DeleteCasa(this.casaDetail.id);
      this.route.navigate(['./']);
    }
    }]
    }).then(alertEl =>{
      alertEl.present();
    })
    
      }
}
