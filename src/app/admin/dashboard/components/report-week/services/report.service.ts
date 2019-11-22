import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { reportData } from './data';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  getAllReportOfWeek() {
    return of(reportData);
  }
}
