import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExtendedPaginationModel } from '../models/extended-pagination.model';
import { extendedPaginationData } from './data';

@Injectable({
  providedIn: 'root'
})
export class ExtendedPaginationService {

  constructor() { }

  getAllData(): Observable<ExtendedPaginationModel[]> {
    return of(extendedPaginationData);
  }
}
