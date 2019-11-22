import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierInfoComponent } from './notifier-info.component';

describe('NotifierInfoComponent', () => {
  let component: NotifierInfoComponent;
  let fixture: ComponentFixture<NotifierInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
