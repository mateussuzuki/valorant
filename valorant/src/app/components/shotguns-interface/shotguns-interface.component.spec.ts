import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotgunsInterfaceComponent } from './shotguns-interface.component';

describe('ShotgunsInterfaceComponent', () => {
  let component: ShotgunsInterfaceComponent;
  let fixture: ComponentFixture<ShotgunsInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShotgunsInterfaceComponent]
    });
    fixture = TestBed.createComponent(ShotgunsInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
