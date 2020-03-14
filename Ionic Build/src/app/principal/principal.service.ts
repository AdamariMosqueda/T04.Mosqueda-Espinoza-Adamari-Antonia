import { Injectable } from '@angular/core';
import {principal} from './principal.model';
@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor() { }

  private principal:principal[]=[
{
  id:'1', 
  titulo:'Blue Lions',
  imageUrl: '../../assets/BlueLions.jpg',
  alumnos: ['Dimitri Alexandre Blaiddyd', 'Dedue Molinaro', 'Felix Hugo Fraldarius', 'Sylvain Jose Gautier', 
  'Ingrid Brandl Galatea', 'Mercedes von Martritz', 'Anette Fantine Dominic', 'Ashe Ubert']
},
{
    id:'2', 
    titulo:'Black Eagles',
    imageUrl: '../../assets/Black Eagles.jpg',
    alumnos: ['Edelgard von Hresvelg', 'Hubert von Vestra', 'Ferdinand von Aegir', 'Bernadetta von Varley', 
    'Linhardt von Hevring', 'Dorothea Arnault', 'Petra Macneary', 'Caspar von Bergliez']
  },
  {
    id:'3', 
    titulo:'Golden Deer',
    imageUrl: '../../assets/Golden Deer.jpg',
    alumnos: ['Claude von Riegan', 'Hilda Valentine Goneril', 'Ignatz Victor', 'Marianne von Edmund',
    'Leonie Pinelli', 'Lysithea von Ordelia', 'Lorenz Hellman Gloucester', 'Raphael Raphael Kirsten']
  }
  ];
  getCasa(){
    return [...this.principal];
  }
  getCasaDetail(casaId:string){
    return {...this.principal.find(casa=>{
      return casa.id===casaId;
    })};

  }

  DeleteCasa(casaId:string) {
    this.principal=this.principal.filter(casa=>{
      return casa.id!==casaId;
    })
  }
}
