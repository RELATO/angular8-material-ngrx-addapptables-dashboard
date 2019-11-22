import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvalCardComponent } from './oval-card.component';

describe('OvalCardComponent', () => {
  let component: OvalCardComponent;
  let fixture: ComponentFixture<OvalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
