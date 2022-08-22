import { SwalService } from './../../services/swal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';
import { UserDataFirebaseService } from '../../services/user-data-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private dataFirebase: UserDataFirebaseService,
    private router: Router,
    private swalService: SwalService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  createUser(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.swalService.openLoading();
    const { email, password } = this.registerForm.value;

    this.auth
      .createUser(email, password)
      .then((userCredential) => {
        this.dataFirebase.createSpaceUser(
          this.mapperUser(userCredential.user!.uid)
        );
        this.swalService.closeLoading();
        this.router.navigate(['/admin']);
      })
      .catch((error) => {
        this.swalService.showAlertError(error.message, 'Algo salio mal');
      });
  }

  mapperUser(uid: string): User {
    return {
      uid: uid,
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    };
  }
}
