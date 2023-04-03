import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {ChangeDetectionListenerDirective} from '../../directive/change-detection-listener.directive';
import TestModel from '../../models/test-model';

@Directive()
export default class ObjectComponent extends ChangeDetectionListenerDirective {
  //@ts-ignore
  @Input() test: TestModel;
  @Output() arrayChange: EventEmitter<any[]> = new EventEmitter();
  @Output() objectChange: EventEmitter<{}> = new EventEmitter();

  override color = '#d000ff';

  changeArrayRef(array: any[]): void {
    this.arrayChange.emit(array);
  }

  changeObjectRef(object: {}): void {
    this.objectChange.emit(object);
  }
}
