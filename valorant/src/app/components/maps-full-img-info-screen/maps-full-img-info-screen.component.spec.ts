import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsFullImgInfoScreenComponent } from './maps-full-img-info-screen.component';

describe('MapsFullImgInfoScreenComponent', () => {
  let component: MapsFullImgInfoScreenComponent;
  let fixture: ComponentFixture<MapsFullImgInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsFullImgInfoScreenComponent]
    });
    fixture = TestBed.createComponent(MapsFullImgInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
