import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPlaneComponent } from './graphic.plane.component';

describe('Graphic.PlaneComponent', () => {
  let component: GraphicPlaneComponent;
  let fixture: ComponentFixture<GraphicPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicPlaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
