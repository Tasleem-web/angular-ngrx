import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { IDeactivateComponent } from 'src/app/shared/IDeactivateComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements IDeactivateComponent {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }
  title = 'Routing Module - Route Guards Demo';

  logout() {
    this._authService.logoutUser();
    this._router.navigate(['books/dashboard'])
  }

  leaveCurrentModule(): void {

    this._router.navigate(['books/dashboard'])
  }

  canExit(): boolean {
    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }
  }
}
