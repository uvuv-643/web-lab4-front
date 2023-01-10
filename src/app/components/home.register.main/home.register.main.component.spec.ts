import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.Register.MainComponent } from './home.register.main.component';

describe('Home.Register.MainComponent', () => {
  let component: Home.Register.MainComponent;
  let fixture: ComponentFixture<Home.Register.MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home.Register.MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home.Register.MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
