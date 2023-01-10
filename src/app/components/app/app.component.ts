import {Component, OnInit} from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Web lab 4';

  username : string | null = localStorage.getItem('username')

  constructor(private router : Router, private authService : AuthenticationService) {
  }

  ngOnInit() {

    setInterval(() => {
      if (!this.authService.isLoggedIn()) {
        if (!this.router.url.includes('register') && !this.router.url.includes('login') && !this.router.url.includes('sms')) {
          this.router.navigate(['/login']);
        }
      }
    }, 1000)

  }
}
