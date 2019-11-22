import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierCustomComponent } from './notifier-custom.component';

describe('NotifierCustomComponent', () => {
  let component: NotifierCustomComponent;
  let fixture: ComponentFixture<NotifierCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
