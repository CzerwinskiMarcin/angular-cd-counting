import {ChangeDetectionStrategy, Component} from '@angular/core';
import PrimitiveComponent from '../../component-templates/primitive/primitive.component';

@Component({
  selector: 'app-on-push-primitive',
  templateUrl: '../../component-templates/primitive/primitive.component.html',
  styleUrls: ['../../component-templates/primitive/primitive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushPrimitiveComponent extends PrimitiveComponent {
  type = 'On Push';
}
