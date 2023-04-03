import {Component} from '@angular/core';
import PrimitiveComponent from '../../component-templates/primitive/primitive.component';

@Component({
  selector: 'app-default-primitive',
  templateUrl: '../../component-templates/primitive/primitive.component.html',
  styleUrls: ['../../component-templates/primitive/primitive.component.scss']
})
export class DefaultPrimitiveComponent extends PrimitiveComponent {
  type = 'Default';
}
