import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ConfirmationService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {DotService} from "../../services/dot.service";
import {Dot} from "../../interfaces/Dot";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  providers: [ConfirmationService]
})

export class TopBarComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private authenticationService : AuthenticationService,
    private dotService : DotService
  ) { }

  username : string | null = localStorage.getItem('username');
  ngOnInit() {
    setInterval(() => {
      this.username = localStorage.getItem('username')
    }, 500)
  }

  items: object[] = [{
    label: 'Clear history',
    icon: 'pi pi-trash',
    command: () => {
      this.clear();
    }
  }, {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => {
      this.logout();
    }
  }];

  public clear() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to remove all points?',
      accept: () => {
        this.dotService.clear().subscribe((ignored) => {

        })
      }
    });
  }

  public logout() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to logout?',
      accept: () => {
        this.authenticationService.logout()
      }
    });
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
