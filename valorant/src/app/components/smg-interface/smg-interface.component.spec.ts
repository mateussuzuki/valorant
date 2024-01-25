import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmgInterfaceComponent } from './smg-interface.component';

describe('SmgInterfaceComponent', () => {
  let component: SmgInterfaceComponent;
  let fixture: ComponentFixture<SmgInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmgInterfaceComponent]
    });
    fixture = TestBed.createComponent(SmgInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
