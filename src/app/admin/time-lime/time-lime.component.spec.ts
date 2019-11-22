import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLimeComponent } from './time-lime.component';

describe('TimeLimeComponent', () => {
  let component: TimeLimeComponent;
  let fixture: ComponentFixture<TimeLimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
