import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunsInfoScreenComponent } from './guns-info-screen.component';

describe('GunsInfoScreenComponent', () => {
  let component: GunsInfoScreenComponent;
  let fixture: ComponentFixture<GunsInfoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GunsInfoScreenComponent]
    });
    fixture = TestBed.createComponent(GunsInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
