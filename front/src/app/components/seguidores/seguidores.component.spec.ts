import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguidoresComponent } from './seguidores.component';

describe('SeguidoresComponent', () => {
  let component: SeguidoresComponent;
  let fixture: ComponentFixture<SeguidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguidoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
