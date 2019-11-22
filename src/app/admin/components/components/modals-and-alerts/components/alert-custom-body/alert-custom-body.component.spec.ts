import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCustomBodyComponent } from './alert-custom-body.component';

describe('AlertCustomBodyComponent', () => {
  let component: AlertCustomBodyComponent;
  let fixture: ComponentFixture<AlertCustomBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCustomBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCustomBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
