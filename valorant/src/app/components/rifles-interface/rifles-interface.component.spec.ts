import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiflesInterfaceComponent } from './rifles-interface.component';

describe('RiflesInterfaceComponent', () => {
  let component: RiflesInterfaceComponent;
  let fixture: ComponentFixture<RiflesInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiflesInterfaceComponent]
    });
    fixture = TestBed.createComponent(RiflesInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
