import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierDocumentationComponent } from './notifier-documentation.component';

describe('NotifierDocumentationComponent', () => {
  let component: NotifierDocumentationComponent;
  let fixture: ComponentFixture<NotifierDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
