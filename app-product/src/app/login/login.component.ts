import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private fb: FormBuilder) {
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
    });
  }

  ngOnInit(): void {}
  submit() {
    if (
      this.loginForm.get('userId').value === 'user123' &&
      this.loginForm.get('password').value === 'User123&'
    )
      alert('Login Successful');
    else alert('Incorrect UserID/Password');
  }
}
