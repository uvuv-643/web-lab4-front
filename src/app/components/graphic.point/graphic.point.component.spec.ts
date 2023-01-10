import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPointComponent } from './graphic.point.component';

describe('Graphic.PointComponent', () => {
  let component: GraphicPointComponent;
  let fixture: ComponentFixture<GraphicPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
