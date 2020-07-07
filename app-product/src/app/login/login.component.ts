import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaptchaComponent } from 'angular-captcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm;
  count: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      userId: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
      captcha: ['', null],
    });
  }

  ngOnInit(): void {
    this.count = 0;
  }
  submit() {
    if (this.count >= 3)
      this.loginForm.get('captcha').setValidators([Validators.required]);
    else this.loginForm.get('captcha').clearValidators();

    this.loginForm.controls['captcha'].updateValueAndValidity();
    if (
      this.loginForm.get('userId').value === 'user123' &&
      this.loginForm.get('password').value === 'User123&' &&
      this.loginForm.valid
    ) {
      alert('Login Successful');
    } else {
      alert('Incorrect UserID/Password');
      this.count = this.count + 1;
    }
  }
}
