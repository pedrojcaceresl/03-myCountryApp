import { Subject, debounceTime } from 'rxjs';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styles: [],
})
export class PaisInputComponent implements OnInit {
    @Output() onInput: EventEmitter<string> = new EventEmitter();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();

    @Input() placeholder: string = '';

    termino: string = '';
    debouncer: Subject<string> = new Subject();

    ngOnInit() {
        this.debouncer
        .pipe(debounceTime(300))
        .subscribe((value) => {
            this.onDebounce.emit(value);
        });
    }

    buscar() {
        if (!this.termino.length) return;
        this.onInput.emit(this.termino);
    }

    keyPressedHandler() {
     this.debouncer.next( this.termino );
    }
}
