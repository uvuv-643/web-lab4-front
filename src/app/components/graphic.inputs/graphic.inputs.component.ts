import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Checkbox} from "primeng/checkbox";
import {DotService} from "../../services/dot.service";

@Component({
  selector: 'app-graphic-inputs',
  templateUrl: './graphic.inputs.component.html',
  styleUrls: ['./graphic.inputs.component.css']
})
export class GraphicInputsComponent implements OnInit {
  xAvailableValues: number[] = [];
  yRange: number[] = [];
  rAvailableValues: number[] = [];

  @Output() onChangeR = new EventEmitter<number>();
  @Output() updatePoints = new EventEmitter<void>();

  selectedX: string[] = [];
  selectedY: string = "";
  selectedR: string[] = ["1"];

  xCoordinateError: boolean = false;
  yCoordinateError: boolean = false;
  rError: boolean = false;

  constructor(private dotService : DotService) { }

  ngOnInit(): void {
    this.xAvailableValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
    this.yRange = [-3, 3]
    this.rAvailableValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
    this.validateRadius()
  }

  public validateRadius() {
    this.rError = this.selectedR.length !== 1 || this.selectedR[0] === '0'
  }

  public onChangeRadius() {
    this.validateRadius()
    if (!this.rError) {
      this.onChangeR.emit(parseInt(this.selectedR[0]));
    } else {
      this.onChangeR.emit(0)
    }
  }

  private onUpdatePoints() {
    this.updatePoints.emit();
  }

  public onChangeY() {
    try {
      let yValue = parseFloat(this.selectedY)
      if (yValue >= this.yRange[0] && yValue <= this.yRange[1]) {
        this.yCoordinateError = false
      }
    } catch (ignored) {

    }
  }

  private validateY() {
    this.yCoordinateError = true
    try {
      let yValue = parseFloat(this.selectedY)
      if (yValue >= this.yRange[0] && yValue <= this.yRange[1]) {
        this.yCoordinateError = false
      }
    } catch (ignored) {

    }
  }

  public onSubmit() {
    this.validateRadius()
    this.validateY()
    if (this.yCoordinateError || this.rError) return
    for (let x of this.selectedX) {
      let xActual : number = parseFloat(x)
      let yActual : number = parseFloat(this.selectedY)
      let rActual : number = parseFloat(this.selectedR[0])
      if (this.xAvailableValues.includes(xActual) && this.rAvailableValues.includes(rActual)) {
        this.dotService.addPoint(xActual, yActual, rActual).subscribe((response) => {
          this.onUpdatePoints()
        })
      }
    }
  }

}
