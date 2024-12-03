import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColordirective]',
  standalone: true
})
export class ColordirectiveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background='yellow',
    this.el.nativeElement.style.color='blue'
   }

}
