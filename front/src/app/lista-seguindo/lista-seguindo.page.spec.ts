import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaSeguindoPage } from './lista-seguindo.page';

describe('ListaSeguindoPage', () => {
  let component: ListaSeguindoPage;
  let fixture: ComponentFixture<ListaSeguindoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSeguindoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaSeguindoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
