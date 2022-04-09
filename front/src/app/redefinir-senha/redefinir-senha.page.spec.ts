import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedefinirSenhaPage } from './redefinir-senha.page';

describe('RedefinirSenhaPage', () => {
  let component: RedefinirSenhaPage;
  let fixture: ComponentFixture<RedefinirSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedefinirSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedefinirSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
