import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierErrorComponent } from './notifier-error.component';

describe('NotifierErrorComponent', () => {
  let component: NotifierErrorComponent;
  let fixture: ComponentFixture<NotifierErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
