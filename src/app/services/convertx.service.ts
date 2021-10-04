import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency, Conversion, Rates } from '../models/currency';

@Injectable({
  providedIn: 'root',
})
export class ApiForexService {
  _apiUrl = 'https://api.frankfurter.app';

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<Currency> {
    return this.http.get<Currency>(`${this._apiUrl}/currencies`);
  }

  convert(valeur: number, from: string, to: string): Observable<Conversion> {
    return this.http.get<Conversion>(
      `${this._apiUrl}/latest?amount=${valeur}&from=${from}&to=${to}`
    );
  }
}
