import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ipt-login-form',
  template: `
    <div [ngClass]="{'with-background': background}" class="form-container">

      <img [src]="image" alt="wolf" width="150px">

      <h2>IPT PLATFORM</h2>
      <hr>

      <form (ngSubmit)="login(loginForm)" [formGroup]="loginForm">
        <ipt-input
          [inputType]="'text'"
          [placeHolder]="'Email'"
          [validateText]="'Debe ser @inglesparatodos.edu.co'"
          [control]="loginForm.controls['email']"
        ></ipt-input>

        <ipt-input
          [inputType]="'password'"
          [placeHolder]="'Password'"
          [control]="loginForm.controls['password']"
        ></ipt-input>
      </form>

      <div class="button-container">
        <a href="">Forget password</a>
        <ipt-button
          [label]="'Login'"
          [primary]="true"
          [isEnabled]="loginForm.valid"
          (onClick)="login(loginForm)"
        ></ipt-button>
      </div>

      <footer>
        <ipt-button
          [label]="'Register'"
          [primary]="false"
        ></ipt-button>
      </footer>

    </div>
  `,
  styleUrls: ['./login-form.css']
})
export class LoginFormComponent {

  @Input() background: boolean = true;
  @Input() image!: string;
  @Output() email = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();

  loginForm!: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
    });
  }

  login(data: FormGroup) {
    this.email.emit(data.controls['email'].value)
    this.password.emit(data.controls['password'].value)

    this.loginForm.controls['email'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }

}
