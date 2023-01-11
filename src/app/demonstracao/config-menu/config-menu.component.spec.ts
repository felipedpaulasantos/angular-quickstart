import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfigMenuComponent } from './config-menu.component';

describe('ConfigMenuComponent', () => {
  let component: ConfigMenuComponent;
  let fixture: ComponentFixture<ConfigMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
