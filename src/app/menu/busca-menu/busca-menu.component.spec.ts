import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuscaMenuComponent } from './busca-menu.component';

describe('BuscaMenuComponent', () => {
  let component: BuscaMenuComponent;
  let fixture: ComponentFixture<BuscaMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
