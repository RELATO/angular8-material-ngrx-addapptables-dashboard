import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedPaginationComponent } from './extended-pagination.component';

describe('ExtendedPaginationComponent', () => {
  let component: ExtendedPaginationComponent;
  let fixture: ComponentFixture<ExtendedPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
