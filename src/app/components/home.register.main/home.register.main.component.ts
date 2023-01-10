import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-register-main',
  templateUrl: './home.register.main.component.html',
  styleUrls: ['./home.register.main.component.css']
})

export class HomeRegisterMainComponent implements OnInit {

  @Input() username! : string;
  @Input() phone! : string;
  @Input() password! : string;
  @Input() phoneError! : boolean;
  confirmPassword : string = ""
  error : boolean = false

  @Output() onSubmitForm = new EventEmitter<RegistrationData>()

  constructor() { }

  public onSubmit() {
    if (this.password === this.confirmPassword) {
      this.onSubmitForm.emit({
        username: this.username,
        phone: this.phone,
        password: this.password,
        code: null
      })
    } else {
      this.error = true
    }
  }

  public flushError() {
    this.error = false
  }

  ngOnInit(): void {

  }

}
