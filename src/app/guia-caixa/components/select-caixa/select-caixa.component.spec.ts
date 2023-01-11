import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectCaixaComponent } from './select-caixa.component';

describe('SelectCaixaComponent', () => {
  let component: SelectCaixaComponent;
  let fixture: ComponentFixture<SelectCaixaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
