import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsVerticalImagesComponent } from './maps-vertical-images.component';

describe('MapsVerticalImagesComponent', () => {
  let component: MapsVerticalImagesComponent;
  let fixture: ComponentFixture<MapsVerticalImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsVerticalImagesComponent]
    });
    fixture = TestBed.createComponent(MapsVerticalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
