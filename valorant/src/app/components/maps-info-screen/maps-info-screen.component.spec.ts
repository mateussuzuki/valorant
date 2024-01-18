import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsInfoScreenComponent } from './maps-info-screen.component';

describe('MapsInfoScreenComponent', () => {
  let component: MapsInfoScreenComponent;
  let fixture: ComponentFixture<MapsInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsInfoScreenComponent]
    });
    fixture = TestBed.createComponent(MapsInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
