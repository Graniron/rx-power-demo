import { Directive, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({selector: '[appRotate]'})
export class RotateDirective implements OnInit {
    private element = this.el.nativeElement;
    private mouseDown$ = Observable.fromEvent<MouseEvent>(this.element, 'mousedown');
    private mouseUp$ = Observable.fromEvent<MouseEvent>(document, 'mouseup');

    private mouseMove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove')
        .map(event => event.clientX)
        .takeUntil(this.mouseUp$);

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.mouseDown$.flatMap((mouseEvent) => this.mouseMove$)
        .subscribe(
            (posX) => {
                const rotY = (posX / document.documentElement.clientWidth * 300) - 150;
                this.element.style = `transform: rotateY(${rotY}deg);`;
            }
        )
    }
}