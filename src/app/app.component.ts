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
  data: TestModel[] = [];

  constructor(el: ElementRef, changeService: ChangeService) {
    super(el, changeService);
    this.data = generateData(1);
  }


  reset(): void {
    this.changeService.propagateReset();
  }

  asyncPush(): void {
    this.changeService.propagatePush();
  }

  changeMainObjectReference(index: number): void {
    this.data[index] = {...this.data[index]};
  }

  changeArrayRef(index: number, array: any[]): void {
    this.data[index].array = array;
  }

  changeObjectRef(index: number,object: any): void {
    this.data[index].nested = object;
  }
}

function generateData(numItems: number): TestModel[] {
  const data: TestModel[] = [];
  for (let i = 0; i < numItems; i++) {
    const item: TestModel = {
      number: Math.floor(Math.random() * 1000),
      string: `String ${i}`,
      array: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100)),
      nested: {
        id: Math.floor(Math.random() * 1000),
        name: `Nested ${i}`,
        data: Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100))
      }
    };
    data.push(item);
  }
  return data;
}
