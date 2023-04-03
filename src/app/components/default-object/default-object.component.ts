import {Component} from '@angular/core';
import ObjectComponent from '../../component-templates/object/object.component';

@Component({
  selector: 'app-default-object',
  templateUrl: '../../component-templates/object/object.component.html',
  styleUrls: ['../../component-templates/object/object.component.scss']
})
export class DefaultObjectComponent extends ObjectComponent {
  type = 'Default';
}
