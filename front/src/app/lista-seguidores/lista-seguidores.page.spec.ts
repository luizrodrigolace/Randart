import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaSeguidoresPage } from './lista-seguidores.page';

describe('ListaSeguidoresPage', () => {
  let component: ListaSeguidoresPage;
  let fixture: ComponentFixture<ListaSeguidoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSeguidoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaSeguidoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
