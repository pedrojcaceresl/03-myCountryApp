import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root',
})
export class PaisService {
    private apiUrl: string = 'https://restcountries.com/v3.1';

    get httpParams() {
        return new HttpParams()
            .set('fields', `name,flags,capital,population,cca2`);
    }

    constructor(
        private http: HttpClient
    ){}

    buscarPais( termino: string ): Observable<Country[]> {
        const url: string = `${ this.apiUrl }/name/${termino}`
        return this.http.get<Country[]>(url, { params: this.httpParams });
    }

    buscarCapital( termino: string ): Observable<Country[]> {
        const url: string = `${this.apiUrl}/capital/${termino}`;
        return this.http.get<Country[]>(url, { params: this.httpParams });
    }

    getPaisByCodigo( codigo: string): Observable<Country[]> {
        const url: string = `${this.apiUrl}/alpha/${codigo}`;
        return this.http.get<Country[]>(url);
    }

    getPaisByRegion( region: string): Observable<Country[]> {
        const url: string = `${this.apiUrl}/region/${ region }`;
        return this.http.get<Country[]>(url, { params: this.httpParams });
    }
 }
