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

<<<<<<< HEAD
import { ParametersService } from './services/parameters-services/parameters.service';
=======
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
>>>>>>> 4bc1b5d4d227069818c1f42578261729e415dd67



@NgModule({
  declarations: [
    AsideButtonComponent,
    ButtonComponent,
    CheckboxComponent,
    DatalistComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    LoginFormComponent,
    RegisterFormComponent
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
<<<<<<< HEAD
    ParametersService
=======
    LoginFormComponent
>>>>>>> 4bc1b5d4d227069818c1f42578261729e415dd67
  ]
})
export class DesignSystemModule { }
