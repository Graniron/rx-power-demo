import { Directive, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({selector: '[appDragable]'})
export class DragableDirective implements OnInit {
    private element = this.el.nativeElement;
    private deviations = 30;
    private mouseDown$ = Observable.fromEvent<MouseEvent>(this.element, 'mousedown');
    private mouseMove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');
    private mouseUp$ = Observable.fromEvent<MouseEvent>(document, 'mouseup')
        .map((e) => {
            if (this.element.offsetLeft > this.element.parentElement.offsetLeft - this.deviations &&
                (this.element.offsetLeft + this.element.offsetWidth) <
                (this.element.parentElement.offsetLeft + this.element.parentElement.offsetWidth + this.deviations)) {
                 this.resetElementPosition();
            } else if (!this.element.classList.contains('showContent')) {
                this.element.className += ' showContent';
            }
        });
    

    constructor(private el: ElementRef) {}

    ngOnInit() {
        let offsetY: number;
        let offsetX: number;

        this.mouseDown$
            .flatMap((mouse) => {
                // get mouse position relative to element
                offsetX = mouse.offsetX;
                offsetY = mouse.offsetY;
                return this.mouseMove$.takeUntil(this.mouseUp$);
            })
            .map(mouse => {
                this.setElementPosition(mouse, offsetY, offsetX);
            })
            .subscribe(m => console.log('mousemove'));
    }

    // Update element position relative to current position of mouse
    setElementPosition(mouse, offsetY, offsetX) {
        this.element.style.position = 'absolute';
        this.element.style.top = mouse.pageY - offsetY + 'px';
        this.element.style.left = mouse.pageX - offsetX + 'px';
        this.element.style.zIndex = '10';
    }

    // Reset element position to return it to list
    resetElementPosition() {
        this.element.style.position = 'relative';
        this.element.style.top = 'inherit';
        this.element.style.left = 'inherit';
        this.element.classList.remove('showContent');
    }
}