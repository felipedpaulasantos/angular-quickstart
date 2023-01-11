import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginasComponent } from './paginas.component';

describe('PaginasComponent', () => {
  let component: PaginasComponent;
  let fixture: ComponentFixture<PaginasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
