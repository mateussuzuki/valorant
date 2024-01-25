import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidearmsInterfaceComponent } from './sidearms-interface.component';

describe('SidearmsInterfaceComponent', () => {
  let component: SidearmsInterfaceComponent;
  let fixture: ComponentFixture<SidearmsInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidearmsInterfaceComponent]
    });
    fixture = TestBed.createComponent(SidearmsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
