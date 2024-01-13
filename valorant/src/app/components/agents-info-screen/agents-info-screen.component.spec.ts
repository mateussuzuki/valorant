import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsInfoScreenComponent } from './agents-info-screen.component';

describe('AgentsInfoScreenComponent', () => {
  let component: AgentsInfoScreenComponent;
  let fixture: ComponentFixture<AgentsInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentsInfoScreenComponent]
    });
    fixture = TestBed.createComponent(AgentsInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
