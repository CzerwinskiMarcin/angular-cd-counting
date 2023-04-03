import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ChangeDetectionListenerDirective} from '../../directive/change-detection-listener.directive';
import ArrayComponent from '../../component-templates/array/array.component';

@Component({
  selector: 'app-on-push-array',
  templateUrl: '../../component-templates/array/array.component.html',
  styleUrls: ['../../component-templates/array/array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushArrayComponent extends ArrayComponent {
  type = 'On Push';
}
