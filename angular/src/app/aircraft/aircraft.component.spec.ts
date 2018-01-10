import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftComponent } from './aircraft.component';

describe('AircraftComponent', () => {
  let component: AircraftComponent;
  let fixture: ComponentFixture<AircraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
