import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public authFirebase: AngularFireAuth) {}

  initAuthListener() {
    return this.authFirebase.authState.subscribe((fuser) => {
      console.log(fuser);
      console.log(fuser?.uid);
      console.log(fuser?.email);
    });
  }

  isAuth() {
    return this.authFirebase.authState.pipe(map((fbUser) => fbUser !== null));
  }
  createUser(email: string, password: string) {
    return this.authFirebase.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.authFirebase.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.authFirebase.signOut();
  }
}
