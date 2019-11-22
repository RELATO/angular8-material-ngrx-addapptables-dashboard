import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBodyComponent } from './custom-body.component';

describe('CustomBodyComponent', () => {
  let component: CustomBodyComponent;
  let fixture: ComponentFixture<CustomBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
