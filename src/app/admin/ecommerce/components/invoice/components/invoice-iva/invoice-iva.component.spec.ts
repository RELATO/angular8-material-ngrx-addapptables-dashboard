import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceIvaComponent } from './invoice-iva.component';

describe('InvoiceIvaComponent', () => {
  let component: InvoiceIvaComponent;
  let fixture: ComponentFixture<InvoiceIvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceIvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceIvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
