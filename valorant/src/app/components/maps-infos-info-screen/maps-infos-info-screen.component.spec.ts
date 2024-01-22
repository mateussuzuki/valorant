import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsInfosInfoScreenComponent } from './maps-infos-info-screen.component';

describe('MapsInfosInfoScreenComponent', () => {
  let component: MapsInfosInfoScreenComponent;
  let fixture: ComponentFixture<MapsInfosInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsInfosInfoScreenComponent]
    });
    fixture = TestBed.createComponent(MapsInfosInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
