import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [
        `
            li {
                cursor: pointer;
            }
        `
    ],
})
export class PorPaisComponent {
    paises: Country[] = [];
    termino: string = '';

    paisesSugeridos: Country[] = [];
    mostrarSugerencias: boolean = false;

    private _hayError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    public hayError: Observable<boolean> = this._hayError.asObservable();

    constructor(private paisService: PaisService) {}

    buscar(termino: string) {
        this.mostrarSugerencias = false;
        this.termino = termino;
        if (!termino.length) return;
        this.paisService.buscarPais(termino).subscribe({
            next: this.responseHandler.bind(this),
            error: this.errorHandler.bind(this),
        });
    }

    responseHandler(paises: Country[]) {
        this._hayError.next(false);
        this.paises = paises;
    }

    errorHandler(error: Error) {
        this.paises = [];
        this._hayError.next(true);
    }

    sugerencias(termino: any) {
        this._hayError.next(false);
        if (!termino) return;
        this.termino = termino;
        this.mostrarSugerencias = true;
        this.paisService.buscarPais( termino )
            .subscribe( paises => this.paisesSugeridos = paises.splice(0,3) );
    }

    buscarSugerido(termino: string) {
        this.buscar(termino);
    }
}
