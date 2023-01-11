import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipografiaComponent } from './tipografia.component';

describe('TipografiaComponent', () => {
  let component: TipografiaComponent;
  let fixture: ComponentFixture<TipografiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
