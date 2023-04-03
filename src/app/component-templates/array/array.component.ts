import {ChangeDetectionListenerDirective} from '../../directive/change-detection-listener.directive';
import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive()
export default class ArrayComponent extends ChangeDetectionListenerDirective {
  @Input() key: string = '';
  @Input() array: any[] = [];
  @Output() arrayChanged: EventEmitter<any[]> = new EventEmitter();

  addItem(value: string): void {
    this.array.push(+value);
  }

  changeReference(): void {
    this.arrayChanged.emit([...this.array]);
  }
}
