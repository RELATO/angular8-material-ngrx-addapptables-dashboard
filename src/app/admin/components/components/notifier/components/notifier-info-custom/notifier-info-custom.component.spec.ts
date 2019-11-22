import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierInfoCustomComponent } from './notifier-info-custom.component';

describe('NotifierInfoCustomComponent', () => {
  let component: NotifierInfoCustomComponent;
  let fixture: ComponentFixture<NotifierInfoCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierInfoCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierInfoCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
