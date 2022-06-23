import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, InputComponent } from 'design-system';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
  ]
})
export class DesignSystemModule { }
