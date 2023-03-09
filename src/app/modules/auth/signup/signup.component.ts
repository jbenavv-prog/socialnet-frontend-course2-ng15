import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
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

  onSubmit(f: any): void {
    //f.value
    //f.valid
    // console.log(f.valid);
    // console.log(f.value);

    const user0bj = f.value;

    if (f.valid) {
      this.authService.signup(user0bj).subscribe({
        next: (result) => {
          // console.log(result);
          this.tokenService.saveToken(result.token);
          this.router.navigate(['/']);
        },
        error: (e) => {
          // console.log(error);
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
