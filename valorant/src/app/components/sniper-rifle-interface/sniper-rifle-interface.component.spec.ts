import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SniperRifleInterfaceComponent } from './sniper-rifle-interface.component';

describe('SniperRifleInterfaceComponent', () => {
  let component: SniperRifleInterfaceComponent;
  let fixture: ComponentFixture<SniperRifleInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SniperRifleInterfaceComponent]
    });
    fixture = TestBed.createComponent(SniperRifleInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
