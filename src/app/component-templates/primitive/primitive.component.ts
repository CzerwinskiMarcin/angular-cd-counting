import {Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {ChangeDetectionListenerDirective} from '../../directive/change-detection-listener.directive';
import {ChangeService} from '../../services/change.service';

@Directive()
export default class PrimitiveComponent extends ChangeDetectionListenerDirective {
  // @ts-ignore
  @Input() key: string;
  @Input() set value(value: any) {
    this._value = value
  };
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  _value: any;

  constructor(protected override el: ElementRef, protected cs: ChangeService) {
    super(el, cs);
  }

  handleInput({value}: any): void {
    this.valueChange.emit(value);
  }
}
