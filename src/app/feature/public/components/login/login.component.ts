import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.auth
      .login(email, password)
      .then((auth) => {
        console.log(auth);
        this.router.navigate(['/admin']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
