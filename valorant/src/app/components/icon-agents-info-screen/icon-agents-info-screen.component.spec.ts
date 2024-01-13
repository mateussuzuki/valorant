import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAgentsInfoScreenComponent } from './icon-agents-info-screen.component';

describe('IconAgentsInfoScreenComponent', () => {
  let component: IconAgentsInfoScreenComponent;
  let fixture: ComponentFixture<IconAgentsInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconAgentsInfoScreenComponent]
    });
    fixture = TestBed.createComponent(IconAgentsInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
