import {ChangeDetectionListenerDirective} from '../../directive/change-detection-listener.directive';
import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive()
export default class NestedObjectComponent extends ChangeDetectionListenerDirective {
  @Input() key: string = '';
  // @ts-ignore
  @Input() object: {id: number, name: string, data: any[]}
  @Output() objectChange: EventEmitter<{}> = new EventEmitter<{}>();

  changeObjectRef(): void {
    this.objectChange.emit({...this.object})
  }

  changeArrayRef(array: any[]): void {
    this.object.data = [...array];
  }
}
