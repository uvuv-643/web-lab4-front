import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BackendService} from "./backend.service";
import {Observable, Subscriber, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'token';

  constructor(
    private authenticationClient: BackendService,
    private router: Router
  ) {}

  public login(phone: string, password: string): Subscription {
    return this.authenticationClient.login(phone, password).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem('username', phone)
      this.router.navigate(['/']);
    });
  }

  public register(username: string, password: string, phone: string, code : string): Observable<any> {
    return this.authenticationClient.register(username, password, phone, code);
  }

  public sendSMS(phone : string) : Observable<any> {
    return this.authenticationClient.sendSMS(phone)
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem('username')
    console.log(4)
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

}
