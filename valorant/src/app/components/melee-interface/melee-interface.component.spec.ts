import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeInterfaceComponent } from './melee-interface.component';

describe('MeleeInterfaceComponent', () => {
  let component: MeleeInterfaceComponent;
  let fixture: ComponentFixture<MeleeInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeleeInterfaceComponent]
    });
    fixture = TestBed.createComponent(MeleeInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
