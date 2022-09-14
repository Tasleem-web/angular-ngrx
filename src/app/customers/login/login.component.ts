import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg!: string;
  retUrl: string = "/books/home";

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const { username, password } = this.loginForm.value;
    this._authService.login(username, password, 'admin').subscribe((data: any) => {
      if (this.retUrl != null) {
        console.log("in if");

        this._router.navigate([this.retUrl]);
      } else {
        console.log("in false");

        this._router.navigate([this.retUrl]);
      }
    })

  }

}
