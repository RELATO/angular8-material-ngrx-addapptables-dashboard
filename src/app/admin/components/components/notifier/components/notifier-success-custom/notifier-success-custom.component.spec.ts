import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierSuccessCustomComponent } from './notifier-success-custom.component';

describe('NotifierSuccessCustomComponent', () => {
  let component: NotifierSuccessCustomComponent;
  let fixture: ComponentFixture<NotifierSuccessCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierSuccessCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierSuccessCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
