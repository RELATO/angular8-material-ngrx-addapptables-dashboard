import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCustomButtonsComponent } from './alert-custom-buttons.component';

describe('AlertCustomButtonsComponent', () => {
  let component: AlertCustomButtonsComponent;
  let fixture: ComponentFixture<AlertCustomButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCustomButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCustomButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
