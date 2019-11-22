import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSimpleComponent } from './alert-simple.component';

describe('AlertSimpleComponent', () => {
  let component: AlertSimpleComponent;
  let fixture: ComponentFixture<AlertSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
