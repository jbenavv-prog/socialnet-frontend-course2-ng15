import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUser()
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    this.user = this.authService.getUser();
    console.log(this.user);
    
  }
}
