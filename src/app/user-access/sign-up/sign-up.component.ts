import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    password: ['', Validators.required]
  });
  error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  public submit() {
    if (this.signup.valid) {
      const user = this.signup.value as RegisterUserDTO;
      this.authService
        .register(user.username, user.email, user.password)
        .subscribe(
          () => {
            this.router.navigate(['access/signin']);
          },
          (err: HttpErrorResponse) => {
            this.error =
              err.status === 400
                ? 'You have entered an invalid username or password.'
                : '';
          }
        );
    }
  }
  ngOnInit() {}
}

export interface RegisterUserDTO {
  email: string;
  username: string;
  password: string;
}
