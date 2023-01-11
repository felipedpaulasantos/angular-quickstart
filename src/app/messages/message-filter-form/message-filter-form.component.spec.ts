import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageFilterFormComponent } from './message-filter-form.component';

describe('MessageFilterFormComponent', () => {
  let component: MessageFilterFormComponent;
  let fixture: ComponentFixture<MessageFilterFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
