import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  @Output() formValue: EventEmitter<any> = new EventEmitter<any>();
  formOwner: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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
