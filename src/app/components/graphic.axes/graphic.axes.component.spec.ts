import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphic.AxesComponent } from './graphic.axes.component';

describe('Graphic.AxesComponent', () => {
  let component: Graphic.AxesComponent;
  let fixture: ComponentFixture<Graphic.AxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphic.AxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphic.AxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
