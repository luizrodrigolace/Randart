import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicacaoPage } from './publicacao.page';

describe('PublicacaoPage', () => {
  let component: PublicacaoPage;
  let fixture: ComponentFixture<PublicacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
