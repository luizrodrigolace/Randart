import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguindoComponent } from './seguindo.component';

describe('SeguindoComponent', () => {
  let component: SeguindoComponent;
  let fixture: ComponentFixture<SeguindoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguindoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
