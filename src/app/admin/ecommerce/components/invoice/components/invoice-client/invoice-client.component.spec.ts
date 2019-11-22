import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceClientComponent } from './invoice-client.component';

describe('InvoiceClientComponent', () => {
  let component: InvoiceClientComponent;
  let fixture: ComponentFixture<InvoiceClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
