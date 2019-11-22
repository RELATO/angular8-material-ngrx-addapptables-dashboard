import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDocumentationComponent } from './card-documentation.component';

describe('CardDocumentationComponent', () => {
  let component: CardDocumentationComponent;
  let fixture: ComponentFixture<CardDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
