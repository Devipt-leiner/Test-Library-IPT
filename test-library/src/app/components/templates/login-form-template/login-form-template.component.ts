import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-template',
  templateUrl: './login-form-template.component.html',
  styleUrls: ['./login-form-template.component.css']
})
export class LoginFormTemplateComponent implements OnInit {

  @Input() background: boolean = true;
  @Output() email = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();

  loginForm!: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
    });
  }

  ngOnInit(): void {
  }

  login(data: FormGroup) {
    this.email.emit(data.controls['email'].value)
    this.password.emit(data.controls['password'].value)

    this.loginForm.controls['email'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }

}
