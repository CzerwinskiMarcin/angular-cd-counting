import {ChangeDetectionStrategy, Component} from '@angular/core';
import ObjectComponent from '../../component-templates/object/object.component';

@Component({
  selector: 'app-on-push-object',
  templateUrl: '../../component-templates/object/object.component.html',
  styleUrls: ['../../component-templates/object/object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushObjectComponent extends ObjectComponent {
  type = 'On Push';
}
