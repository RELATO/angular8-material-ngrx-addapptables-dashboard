import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAnDropSortingComponent } from './drag-an-drop-sorting.component';

describe('DragAnDropSortingComponent', () => {
  let component: DragAnDropSortingComponent;
  let fixture: ComponentFixture<DragAnDropSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragAnDropSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAnDropSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
