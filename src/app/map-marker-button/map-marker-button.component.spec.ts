import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerButtonComponent } from './map-marker-button.component';

describe('MapMarkerButtonComponent', () => {
  let component: MapMarkerButtonComponent;
  let fixture: ComponentFixture<MapMarkerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMarkerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
