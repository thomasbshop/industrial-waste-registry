import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Observable, Observer } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() form?: string;
  @Input() data?: any;

  validateForm: FormGroup;

  selectedCounty = 'Mombasa';
  countyData = ['Nairobi', 'Kajiado', 'Mombasa'];

  submitForm(value: { name: string; address: string; street: string; county: string; }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    if(this.data){
        // Update the registry.
        console.log(this.data)
        this.apiService.putRegistry(value, this.data)
        .subscribe(
          (response) => {
            console.log(response);
          }
        )
    } else {
       // Create the registry.
       this.apiService.postRegistry(value)
       .subscribe(
         (response) => {
           console.log(response);
         }
       )
    }
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


  constructor(private fb: FormBuilder, private modal: NzModalRef, private apiService: ApiService,) {
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
    if(this.data){
      this.validateForm.setValue(
        { 
           name : this.data.name,
           address :this.data.address,
           street :this.data.street,
           county :this.data.county
       })
    }
  }

}
