import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithPopup, GoogleAuthProvider, UserCredential, signOut, onAuthStateChanged, User } from "firebase/auth";
import { Observable } from 'rxjs';
import { auth } from '../firebase/firebase-config';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private auth = auth
  private provider = new GoogleAuthProvider()

  private user$: Observable<User | null | any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  getActiveUser(): Observable<User | null> {
    return this.user$
  }

  sigInGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, this.provider)
  }

  signOut(): Promise<void> {
    return signOut(this.auth)
  }
}