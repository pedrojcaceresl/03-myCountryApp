import { BehaviorSubject, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-capital',
    templateUrl: './por-capital.component.html',
    styles: [],
})
export class PorCapitalComponent {
    paises: any[] = [];
    termino: string = '';

    private _hayError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    public hayError: Observable<boolean> = this._hayError.asObservable();

    constructor(private paisService: PaisService) {}

    buscar(termino: string) {
        this.termino = termino;
        if (!termino.length) return;
        this.paisService.buscarCapital(termino).subscribe({
            next: this.responseHandler.bind(this),
            error: this.errorHandler.bind(this),
        });
    }

    responseHandler(paises: any[]) {
        this._hayError.next(false);
        console.log(paises)
        this.paises = paises;
    }

    errorHandler(error: Error) {
        this.paises = [];
        this._hayError.next(true);
    }

    sugerencias(event: any) {
        this._hayError.next(false);
        console.log(event);
    }
}
