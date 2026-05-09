import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

/**
 * Directive that fades + slides an element up when it enters the viewport.
 * Usage:
 *   <div appReveal>          — animates with no delay
 *   <div appReveal="0.15s"> — static delay
 *   <div [appReveal]="expr"> — dynamic delay expression
 */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() appReveal: string | '' = '';

  private obs?: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    const delay = this.appReveal || '0s';
    this.el.nativeElement.style.setProperty('--reveal-delay', delay);

    this.obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.obs?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    this.obs.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.obs?.disconnect();
  }
}
