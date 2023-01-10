import {Component, EventEmitter, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home-login',
  templateUrl: './home.login.component.html',
  styleUrls: ['./home.login.component.css']
})

export class HomeLoginComponent {
  phone: string = "";
  password: string = "";
  remember: boolean = false;

  error : boolean = false

  constructor(private authenticationService: AuthenticationService) {}

  public onSubmit() {
    this.authenticationService.login(
      this.phone, this.password
    );
    setTimeout(() => {
      this.error = true;
    }, 500)
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
