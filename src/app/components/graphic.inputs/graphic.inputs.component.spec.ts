import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphic.InputsComponent } from './graphic.inputs.component';

describe('Graphic.InputsComponent', () => {
  let component: Graphic.InputsComponent;
  let fixture: ComponentFixture<Graphic.InputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphic.InputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphic.InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
