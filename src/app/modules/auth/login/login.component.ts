import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private authService: AuthService) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(f: any) {
    // f.value {email: "correo@...", password: "/&$%&$#"}
    // f.valid true || false

    if (f.valid) {
      this.authService.login(f.value).subscribe({
        next: (result)=> {
          console.log(result);
        },
        error: (error)=> {
          console.log(error);
        }
      })
    } else {
      console.log("Datos incompletos, por favor rellenar los campos obligatorios");
    }
  }
}
