import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  reTypePassword = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);
  viewType: string = "login";

  constructor(private authService: AuthService) {
  }

  onViewTypeChange(viewType: string): void {
    console.log("viewType: " + viewType);
    this.viewType = viewType;
  }

  onLogIn(): void {
    console.log('login');
    this.authService.logIn(this.email.getRawValue()!,
      this.password.getRawValue()!)

  }

  onRegister(): void {
    console.log('register');
    this.authService.register(this.username.getRawValue()!,
      this.email.getRawValue()!,
      this.password.getRawValue()!,
      this.reTypePassword.getRawValue()!)
  }


  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return formControl.hasError('email') ? 'Not a valid email' : '';
  }

}
