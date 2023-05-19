import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/envirnoment';
import { Observable } from 'rxjs';
import { Banda } from './banda';


@Injectable({
 providedIn: 'root'
})
export class BandaService {

constructor(private http: HttpClient) { }
  private apiUrl: string = environment.baseUrl;
  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }
}
