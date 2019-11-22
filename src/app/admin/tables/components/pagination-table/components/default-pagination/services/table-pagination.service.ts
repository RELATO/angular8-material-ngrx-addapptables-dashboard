import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablePaginationModel } from '../models/table-pagination.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablePaginationService {

  constructor(private http: HttpClient) { }

  getRepoIssues(sort: string, order: string, page: number): Observable<TablePaginationModel> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    return this.http.get<TablePaginationModel>(requestUrl);
  }
}
