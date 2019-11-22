import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDocumentationComponent } from './alert-documentation.component';

describe('AlertDocumentationComponent', () => {
  let component: AlertDocumentationComponent;
  let fixture: ComponentFixture<AlertDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
