import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuElementosComponent } from './menu-elementos.component';

describe('MenuElementosComponent', () => {
  let component: MenuElementosComponent;
  let fixture: ComponentFixture<MenuElementosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
