import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsAndAlertsComponent } from './modals-and-alerts.component';

describe('ModalsAndAlertsComponent', () => {
  let component: ModalsAndAlertsComponent;
  let fixture: ComponentFixture<ModalsAndAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsAndAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsAndAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
