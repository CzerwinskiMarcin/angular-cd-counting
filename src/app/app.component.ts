import {Component, ElementRef} from '@angular/core';
import {ChangeService} from './services/change.service';
import TestModel from './models/test-model';
import {ChangeDetectionListenerDirective} from './directive/change-detection-listener.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ChangeDetectionListenerDirective {
  override color = '#ff0000';
  test: TestModel = new TestModel();

  constructor(el: ElementRef, changeService: ChangeService) {
    super(el, changeService);
  }

  reset(): void {
    this.changeService.propagateReset();
  }

  asyncPush(): void {
    this.changeService.propagatePush();
  }

  changeMainObjectReference(): void {
    this.test = {...this.test};
  }

  changeArrayRef(array: any[]): void {
    this.test.array = array;
  }

  changeObjectRef(object: any): void {
    this.test.nested = object;
  }

  handleValueChanged({name, value}: {name: string, value: any}): void {
    // @ts-ignore
    this.test[name] = value;
    console.log('Hnadle value changed');
    console.log(this.test);
  }
}
