import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWeekComponent } from './report-week.component';

describe('ReportWeekComponent', () => {
  let component: ReportWeekComponent;
  let fixture: ComponentFixture<ReportWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
