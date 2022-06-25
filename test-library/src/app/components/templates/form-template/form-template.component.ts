import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  myForm!: FormGroup;
  typeDocument: any[] = [
    { code: '1', name: 'Cédula de ciudadanía' },
    { code: '2', name: 'Tarjeta de identidad' },
    { code: '3', name: 'Cédula de extranjería' },
  ];

  dataList: any[] = [
    { code: '1', name: 'Masculino' },
    { code: '2', name: 'Femenino' },
    { code: '3', name: 'Otro' },
  ];

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(32)]],
      last_name: [''],
      type_document: [''],
      document: [''],
      phone_number: [''],
      email: [''],
      birthday: [''],
      male: ['',],
      female: ['',],
      other: ['',],
      gym: ['',],
      reading: ['',],
    });
  }

  sendForm(myForm: FormGroup) {
    this.myForm.valid ? console.log(myForm) : false;
  }

  getEmail(data: any) {
    console.log(data);
  }

  getPassword(data: any) {
    console.log(data);
  }
}
