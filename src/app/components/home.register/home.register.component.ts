import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-register',
  templateUrl: './home.register.component.html',
  styleUrls: ['./home.register.component.css']
})
export class HomeRegisterComponent {
  username: string = "";
  password: string = "";
  phone: string = "";
  code: string = "";

  resendAfter : number = 0

  error : boolean = false
  errorSMS : boolean = false
  isOpenedHomeRegisterPage: boolean = true
  displayRegisterSuccess: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  public sendSMS() {
    this.authenticationService.sendSMS(
      this.phone
    ).subscribe((response : SendSMSResponse) => {
      let result : boolean = response.correctPhone;
      if (result) {
        this.isOpenedHomeRegisterPage = false
        if (response.resendAfter > 0) {
          this.resendAfter = response.resendAfter
        } else {
          this.resendAfter = 60
        }
      } else {
        this.error = true
      }
    });
  }

  public onSendSMS(data : RegistrationData) {
    this.username = data.username
    this.phone = data.phone
    this.password = data.password
    this.sendSMS()
  }

  public onSubmit(code : string) {
    this.code = code
    this.authenticationService.register(
      this.username, this.password, this.phone, this.code
    ).subscribe((response : RegistrationResponse) => {
      if (response.success) {
        this.displayRegisterSuccess = true
        // this.router.navigate(['/login'])
      } else {
        this.errorSMS = true
      }
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.resendAfter >= 0) {
        this.resendAfter--
      }
    }, 1000)
  }


  goToLogin() {
    this.router.navigate(['/login'])
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
