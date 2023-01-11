import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabberComponent } from './tabber.component';

describe('TabberComponent', () => {
  let component: TabberComponent;
  let fixture: ComponentFixture<TabberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
