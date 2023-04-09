import { Country } from './../../interfaces/pais.interface';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [],
})
export class PorRegionComponent {
    // regiones: string[] = [
    //     'EU',
    //     'EFTA',
    //     'CARICOM',
    //     'PA',
    //     'AU',
    //     'USAN',
    //     'EEU',
    //     'AL',
    //     'ASEAN',
    //     'CAIS',
    //     'CEFTA',
    //     'NAFTA',
    //     'SAARC',
    // ];
    regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    regionActiva: string = '';
    paises: Country[] = [];

    unsuscribe: Subject<void> = new Subject();

    constructor(private paisService: PaisService) {}

    activarRegion(region: string) {

        if (region === this.regionActiva) return;

        this.regionActiva = region;
        this.paises = [];

        this.paisService
            .getPaisByRegion(region)
            .pipe(takeUntil(this.unsuscribe))
            .subscribe((response: Country[]) => {
                this.paises = response;
                console.log(this.paises)
            });
    }

    getClaseCSS(region: string): string {
        return region === this.regionActiva
            ? 'btn btn-primary mr-1'
            : 'btn btn-outline-primary mr-1';
    }

    ngOnDestroy(): void {
        this.unsuscribe.next();
        this.unsuscribe.complete;
    }
}
