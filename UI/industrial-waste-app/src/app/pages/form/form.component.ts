import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() form?: string;

  validateForm: FormGroup;

  submitForm(value: { userName: string; email: string; password: string; confirm: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    this.destroyModal()
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }


  constructor(private fb: FormBuilder, private modal: NzModalRef) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      street: ['', [Validators.required]],
      county: ['', [Validators.required]],
    });
  }


  destroyModal(): void {
    this.modal.destroy({ data: 'this the result data' });
  }

  ngOnInit(): void {
  }

}
