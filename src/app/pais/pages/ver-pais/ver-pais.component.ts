import { Country } from './../../interfaces/pais.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, tap, switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './ver-pais.component.html',
    styles: [],
})
export class VerPaisComponent implements OnInit {

    pais!: Country;

    constructor(
        private route: ActivatedRoute,
        private paisService: PaisService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getPaisByRouteParams();
    }

    getPaisByRouteParams() {
        this.route.params
            .pipe(
                switchMap((param: any) =>
                    this.paisService.getPaisByCodigo(param.id)
                ),
                map((response) => response[0]),
                tap(console.log)
            )
            .subscribe((pais) => {
                this.pais = pais;
            });

    }
}
