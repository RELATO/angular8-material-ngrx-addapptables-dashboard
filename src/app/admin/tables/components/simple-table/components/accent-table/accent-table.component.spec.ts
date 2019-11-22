import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentTableComponent } from './accent-table.component';

describe('AccentTableComponent', () => {
  let component: AccentTableComponent;
  let fixture: ComponentFixture<AccentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
