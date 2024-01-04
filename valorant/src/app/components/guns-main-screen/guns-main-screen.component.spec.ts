import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunsMainScreenComponent } from './guns-main-screen.component';

describe('GunsMainScreenComponent', () => {
  let component: GunsMainScreenComponent;
  let fixture: ComponentFixture<GunsMainScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GunsMainScreenComponent]
    });
    fixture = TestBed.createComponent(GunsMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
