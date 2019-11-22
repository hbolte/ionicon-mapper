import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IconMapComponent } from './icon-map.component';

describe('CustomIconComponent', () => {
  let component: IconMapComponent;
  let fixture: ComponentFixture<IconMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IconMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
