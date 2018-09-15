import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // 1- ElementRef
  /* constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  } */

  // 2- Renderer
  /* constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
  } */

  @HostBinding('style.backgroundColor') bg;
  @Input() defaultBg;
  @Input() appHighlight;

  @HostListener('mouseenter')
  mouseenter() {
    this.bg = this.appHighlight;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.bg = this.defaultBg;
  }

  ngOnInit() {
    this.bg = this.defaultBg;
  }
}
