import { Component, OnInit } from '@angular/core';
import {principal} from './principal.model';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private casaService:PrincipalService) { }
  casas:principal[];
  ngOnInit() {
    this.casas= this.casaService.getCasa();
  }

}
