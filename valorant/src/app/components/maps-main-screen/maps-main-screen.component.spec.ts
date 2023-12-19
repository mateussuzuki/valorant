import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMainScreenComponent } from './maps-main-screen.component';

describe('MapsMainScreenComponent', () => {
  let component: MapsMainScreenComponent;
  let fixture: ComponentFixture<MapsMainScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsMainScreenComponent]
    });
    fixture = TestBed.createComponent(MapsMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
