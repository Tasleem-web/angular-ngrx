import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const userDetails = [
  { username: 'tasleem', role: 'admin' },
  { username: 'kashif', role: 'user' }
]

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn!: boolean;
  private userName!: String;

  constructor() {
    this.isLoggedIn = false
  }

  login(username: string, password: string, role: string): Observable<boolean> {
    const validateUser = userDetails.find(_ => (_.username == username) && (_.role == role));
    console.log({ validateUser });
    this.isLoggedIn = false

    if (validateUser?.role === 'admin') {
      this.isLoggedIn = true;
      this.userName = username;
      return of(true);

    }
    return of(false);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }

}
