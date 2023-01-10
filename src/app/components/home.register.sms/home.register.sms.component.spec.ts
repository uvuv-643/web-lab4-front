import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSmsComponent } from './home.sms.component';

describe('Home.SmsComponent', () => {
  let component: HomeSmsComponent;
  let fixture: ComponentFixture<HomeSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
