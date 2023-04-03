import {Component} from '@angular/core';
import NestedObjectComponent from '../../component-templates/nested-object/nested-object.component';

@Component({
  selector: 'app-default-nested-object',
  templateUrl: '../../component-templates/nested-object/nested-object.component.html',
  styleUrls: ['../../component-templates/nested-object/nested-object.component.scss']
})
export class DefaultNestedObjectComponent extends NestedObjectComponent {
  type = 'Default';
}
