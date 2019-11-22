import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { simpleTableData } from './data';
import { SimpleTableModel } from '../models/simple-table.model';

@Injectable({
  providedIn: 'root'
})
export class SimpleTableService {

  constructor() { }

  getAllData(): Observable<SimpleTableModel[]> {
    return of(simpleTableData);
  }
}
