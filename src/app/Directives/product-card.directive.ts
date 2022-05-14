import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private elemRef: ElementRef) { 
    elemRef.nativeElement.style.boxShadow=`4px 4px 4px 2px rgba(0, 0, 0, 0.2)`;
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.elemRef.nativeElement.style.boxShadow="8px 8px 8px 8px rgba(210,105,30,1) ";
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.boxShadow=`2px 2px 2px 1px rgba(0, 0, 0, 0.5)`;
  }
}
