import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AsideButtonComponent } from './components/atoms/aside-button/aside-button.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { DatalistComponent } from './components/atoms/datalist/datalist.component';
import { InputComponent } from './components/atoms/input/input.component';
import { RadioComponent } from './components/atoms/radio/radio.component';
import { SelectComponent } from './components/atoms/select/select.component';

import { ParametersService } from './services/parameters-services/parameters.service';



@NgModule({
  declarations: [
    AsideButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    DatalistComponent,
    InputComponent,
    RadioComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AsideButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    DatalistComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    ParametersService
  ]
})
export class DesignSystemModule { }
