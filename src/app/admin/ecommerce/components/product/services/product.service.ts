import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { products } from './data';

@Injectable()
export class ProductService {

  constructor() { }

  getAll() {
    return of(products);
  }
}
