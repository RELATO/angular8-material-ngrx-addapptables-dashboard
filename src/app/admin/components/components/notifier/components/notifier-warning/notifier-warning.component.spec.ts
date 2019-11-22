import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierWarningComponent } from './notifier-warning.component';

describe('NotifierWarningComponent', () => {
  let component: NotifierWarningComponent;
  let fixture: ComponentFixture<NotifierWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
