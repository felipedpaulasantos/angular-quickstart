import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepperMessageComponent } from './stepper-message.component';

describe('StepperMessageComponent', () => {
  let component: StepperMessageComponent;
  let fixture: ComponentFixture<StepperMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
