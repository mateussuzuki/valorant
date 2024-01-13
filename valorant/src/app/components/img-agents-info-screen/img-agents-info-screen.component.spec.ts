import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAgentsInfoScreenComponent } from './img-agents-info-screen.component';

describe('ImgAgentsInfoScreenComponent', () => {
  let component: ImgAgentsInfoScreenComponent;
  let fixture: ComponentFixture<ImgAgentsInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgAgentsInfoScreenComponent]
    });
    fixture = TestBed.createComponent(ImgAgentsInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
