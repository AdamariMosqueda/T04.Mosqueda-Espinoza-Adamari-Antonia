import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasaDetallesPage } from './casa-detalles.page';

describe('CasaDetallesPage', () => {
  let component: CasaDetallesPage;
  let fixture: ComponentFixture<CasaDetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaDetallesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasaDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
