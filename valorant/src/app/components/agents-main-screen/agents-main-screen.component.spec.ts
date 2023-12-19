import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsMainScreenComponent } from './agents-main-screen.component';

describe('AgentsMainScreenComponent', () => {
  let component: AgentsMainScreenComponent;
  let fixture: ComponentFixture<AgentsMainScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentsMainScreenComponent]
    });
    fixture = TestBed.createComponent(AgentsMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
