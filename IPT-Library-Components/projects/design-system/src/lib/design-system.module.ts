import { NgModule } from "@angular/core"
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms"

import ButtonComponent from "./components/button/button.component"
import InputComponent from "./components/input/input.component"
import SelectComponent from "./components/select/select.component"

@NgModule({
  declarations: [
    FormsModule,
    FormBuilder,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    FormsModule,
    FormBuilder,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
  exports: [
    FormsModule,
    FormBuilder,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
})

export class DesignSystemModule {}
