import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.scss'],
})
export class FormOwnerComponent implements OnInit {
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formOwner = this.formBuilder.group({
      name: [],
      salary: [],
      age: [],
    });
  }

  submit() {
    this.formValue.emit(this.formOwner.value);
  }
}
