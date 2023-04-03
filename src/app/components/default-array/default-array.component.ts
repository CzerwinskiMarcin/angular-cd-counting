import {Component} from '@angular/core';
import ArrayComponent from '../../component-templates/array/array.component';

@Component({
  selector: 'app-default-array',
  templateUrl: '../../component-templates/array/array.component.html',
  styleUrls: ['../../component-templates/array/array.component.scss']
})
export class DefaultArrayComponent extends ArrayComponent {
  type = 'Default';
}
