import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataFirebaseService {
  constructor(private fireStore: AngularFirestore) {}

  createSpaceUser(user: User) {
    this.fireStore
      .doc(`${user.uid}/usuario`)
      .set({ ...user })
      .then(() => {
        localStorage.setItem('user', JSON.stringify(user));
      });
  }
}
