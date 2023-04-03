import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import TestModel from '../../models/test-model';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {
  // @ts-ignore
  @Input() test: TestModel
  // @ts-ignore
  form : FormGroup;

  @Output() valueChanged: EventEmitter<{name: string, value: any}> = new EventEmitter<{name: string; value: any}>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      number: this.test.number,
      string: this.test.string,
      array: this.fb.array(this.test.array),
      nested: this.fb.group({
        id: this.test.nested.id,
        name: this.test.nested.name,
        data: this.fb.array(this.test.nested.data)
      })
    });
  }

  get array(): FormArray {
    return this.form.get('array') as FormArray;
  }

  get nestedArray(): FormArray {
    return this.form.get('nested')!.get('data') as FormArray;
  }

  updateField(name: string, value: string): void {
    this.form.get(name)?.patchValue(value);
    this.valueChanged.emit({name, value});
  }

  addToArray(array: FormArray, value: string): void {
    array.push(new FormControl(value));
  }

  onSubmit(): void {
  }
}
