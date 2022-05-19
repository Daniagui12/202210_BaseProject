import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banda } from './Banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private apiUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http
    .get<Banda[]>(this.apiUrl)
    .pipe(
      catchError((err) => throwError(() => new Error("Error en el servicio")))
      )
    }
}
