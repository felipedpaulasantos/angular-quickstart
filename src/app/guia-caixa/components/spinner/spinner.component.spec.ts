import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpinnerCaixaComponent } from './spinner.component';

describe('SpinnerCaixaComponent', () => {
  let component: SpinnerCaixaComponent;
  let fixture: ComponentFixture<SpinnerCaixaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
