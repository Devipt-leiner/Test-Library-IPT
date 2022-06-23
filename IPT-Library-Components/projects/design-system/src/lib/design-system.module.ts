import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, InputComponent, SelectComponent } from 'design-system';
import DatalistComponent from './components/datalist/datalist.component';
import AsideButtonComponent from './components/aside-button/aside-button.component';

@NgModule({
  declarations: [
    AsideButtonComponent,
    ButtonComponent,
    DatalistComponent,
    InputComponent,
    SelectComponent,
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
    AsideButtonComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    DatalistComponent,
  ]
})
export class DesignSystemModule { }
