import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-home-register-sms',
  templateUrl: './home.register.sms.component.html',
  styleUrls: ['./home.register.sms.component.css']
})
export class HomeRegisterSmsComponent implements OnInit {

  code1 : string = ""
  code2 : string = ""
  code3 : string = ""
  code4 : string = ""
  @Input() resendAfter : number = 0

  @Input() error! : boolean
  @Output() onResendCode = new EventEmitter()
  @Output() onSubmit = new EventEmitter<string>()

  @ViewChild('code1s') code1Element: ElementRef | undefined;
  @ViewChild('code2s') code2Element: ElementRef | undefined;
  @ViewChild('code3s') code3Element: ElementRef | undefined;
  @ViewChild('code4s') code4Element: ElementRef | undefined;

  availableCodeSymbols : string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  inputStyles: object = {
    width: '60px',
    textAlign: 'center',
    fontSize: '22px',
  };

  private changeCodeValue(currentCode : number, targetValue : string) {
    this.error = false
    if (currentCode === 1) {
      this.code1 = targetValue
    } else if (currentCode === 2) {
      this.code2 = targetValue
    } else if (currentCode === 3) {
      this.code3 = targetValue
    } else if (currentCode === 4) {
      this.code4 = targetValue
    }
  }

  private changeFocus(currentCode : number, prevElement : ElementRef | undefined, nextElement : ElementRef | undefined, key : string) {
    if (prevElement && nextElement) {
      if (this.availableCodeSymbols.includes(key)) {
        this.changeCodeValue(currentCode, key)
        if (currentCode === 4) {
          this.submitForm()
        }
        nextElement?.nativeElement.focus()
      } else if (key === 'ArrowLeft') {
        prevElement?.nativeElement.focus()
      } else if (key === 'ArrowRight') {
        nextElement?.nativeElement.focus()
      } else if (key === 'Backspace' || key === 'Delete') {
        this.changeCodeValue(currentCode, "")
        prevElement?.nativeElement.focus()
      }
    }
  }

  public onChangeCode1(event : KeyboardEvent) {
    this.changeFocus(1, this.code1Element, this.code2Element, event.key)
  }
  public onChangeCode2(event : KeyboardEvent) {
    this.changeFocus(2, this.code1Element, this.code3Element, event.key)
  }
  public onChangeCode3(event : KeyboardEvent) {
    this.changeFocus(3, this.code2Element, this.code4Element, event.key)
  }
  public onChangeCode4(event : KeyboardEvent) {
    this.changeFocus(4, this.code3Element, this.code4Element, event.key)
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.code1Element?.nativeElement.focus()
    }, 100)
  }

  public resendCode() {
    this.onResendCode.emit()
  }

  public submitForm() {
    this.onSubmit.emit(this.code1 + this.code2 + this.code3 + this.code4)
  }

}
