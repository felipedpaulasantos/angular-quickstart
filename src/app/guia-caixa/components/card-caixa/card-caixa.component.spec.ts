import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardCaixaComponent } from './card-caixa.component';

describe('CardCaixaComponent', () => {
  let component: CardCaixaComponent;
  let fixture: ComponentFixture<CardCaixaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
