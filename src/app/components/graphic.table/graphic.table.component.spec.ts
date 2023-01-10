import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphic.TableComponent } from './graphic.table.component';

describe('Graphic.TableComponent', () => {
  let component: Graphic.TableComponent;
  let fixture: ComponentFixture<Graphic.TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphic.TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graphic.TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
