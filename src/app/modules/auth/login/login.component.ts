import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

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
        next: (result) => {
          console.log(result); // result.token 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…I2OX0.0pIJ6_K_Y-yMaQ2sXGiytjocFqEKgmlVwjEQRTcmy8o'
          this.tokenService.saveToken(result.token);
          this.router.navigate(['/']);
        },
        error: (e) => {
          // console.log(e.error.message);
          alert(e.error.message);
        },
      });
    } else {
      // console.log(
      //   'Datos incompletos, por favor rellenar los campos obligatorios'
      // );
      alert('Datos incompletos, por favor rellenar los campos obligatorios');
    }
  }
}
