import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { SwalService } from '../../services/swal.service';

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
    private router: Router,
    private swalService: SwalService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.invalid) return;
    this.swalService.openLoading();
    const { email, password } = this.loginForm.value;

    this.auth
      .login(email, password)
      .then((auth) => {
        this.swalService.closeLoading();
        this.router.navigate(['/admin']);
      })
      .catch((error) => {
        this.swalService.showAlertError(error.message, 'Algo salio mal');
      });
  }
}
