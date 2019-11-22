import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSomeComponentsComponent } from './form-some-components.component';

describe('FormSomeComponentsComponent', () => {
  let component: FormSomeComponentsComponent;
  let fixture: ComponentFixture<FormSomeComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSomeComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSomeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
