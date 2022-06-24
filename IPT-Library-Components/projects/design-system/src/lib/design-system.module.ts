import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import AsideButtonComponent from './components/aside-button/aside-button.component';
import ButtonComponent from './components/button/button.component';
import CheckboxComponent from './components/checkbox/checkbox.component';
import DatalistComponent from './components/datalist/datalist.component';
import InputComponent from './components/input/input.component';
import SelectComponent from './components/select/select.component';



@NgModule({
  declarations: [
    AsideButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    DatalistComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AsideButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    DatalistComponent,
    InputComponent,
    SelectComponent,
  ]
})
export class DesignSystemModule { }
