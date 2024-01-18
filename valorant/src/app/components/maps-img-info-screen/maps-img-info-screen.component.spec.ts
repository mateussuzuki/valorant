import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsImgInfoScreenComponent } from './maps-img-info-screen.component';

describe('MapsImgInfoScreenComponent', () => {
  let component: MapsImgInfoScreenComponent;
  let fixture: ComponentFixture<MapsImgInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsImgInfoScreenComponent]
    });
    fixture = TestBed.createComponent(MapsImgInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
