import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierSuccessComponent } from './notifier-success.component';

describe('NotifierSuccessComponent', () => {
  let component: NotifierSuccessComponent;
  let fixture: ComponentFixture<NotifierSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
