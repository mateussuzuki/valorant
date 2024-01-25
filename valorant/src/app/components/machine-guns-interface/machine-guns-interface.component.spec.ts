import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineGunsInterfaceComponent } from './machine-guns-interface.component';

describe('MachineGunsInterfaceComponent', () => {
  let component: MachineGunsInterfaceComponent;
  let fixture: ComponentFixture<MachineGunsInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineGunsInterfaceComponent]
    });
    fixture = TestBed.createComponent(MachineGunsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
