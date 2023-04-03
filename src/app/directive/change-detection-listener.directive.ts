import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  DoCheck,
  ElementRef,
  Inject,
  Injector,
  OnChanges
} from '@angular/core';
import {ChangeService} from '../services/change.service';

@Directive({
  selector: '[appChangeDetectionListener]'
})
export class ChangeDetectionListenerDirective implements AfterViewInit, DoCheck, OnChanges {
  color = '#000000';
  style: any
  removeOnNext = false
  protected cdCounter = 0;

  constructor(protected el: ElementRef, protected changeService: ChangeService) {
    changeService
      .reset$
      .subscribe(() => {
        this.removeOnNext = true;
      });

    changeService
      .push$
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.style = this.el.nativeElement.children[0].style;
    this.style.borderBoxSize = 'border-box';
    this.removeChangeMarker();
  }

  ngOnChanges(): void {
    if (this.removeOnNext) {
      this.removeOnNext = false;
      this.removeChangeMarker();
    } else {
      this.addChangeMarker();
    }
    this.cdCounter++;
  }

  ngDoCheck(): void {
  }

  private addChangeMarker(): void {
    this.el.nativeElement.children[0].style.border = `2px solid ${this.color}`;
  }

  private removeChangeMarker(): void {
    this.el.nativeElement.children[0].style.border = '2px dashed grey';
  }

  protected handleClick(): void {}
}
