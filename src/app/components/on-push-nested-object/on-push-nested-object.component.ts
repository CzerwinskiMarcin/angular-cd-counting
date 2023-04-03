import {ChangeDetectionStrategy, Component} from '@angular/core';
import NestedObjectComponent from '../../component-templates/nested-object/nested-object.component';

@Component({
  selector: 'app-on-push-nested-object',
  templateUrl: '../../component-templates/nested-object/nested-object.component.html',
  styleUrls: ['../../component-templates/nested-object/nested-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushNestedObjectComponent extends NestedObjectComponent {
  type = 'On Push';
}
