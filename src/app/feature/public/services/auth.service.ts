import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public authFirebase: AngularFireAuth) {}

  createUser(user: User) {
    return this.authFirebase.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }
}
