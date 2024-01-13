import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesAgentsInfoScreenComponent } from './abilities-agents-info-screen.component';

describe('AbilitiesAgentsInfoScreenComponent', () => {
  let component: AbilitiesAgentsInfoScreenComponent;
  let fixture: ComponentFixture<AbilitiesAgentsInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilitiesAgentsInfoScreenComponent]
    });
    fixture = TestBed.createComponent(AbilitiesAgentsInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
