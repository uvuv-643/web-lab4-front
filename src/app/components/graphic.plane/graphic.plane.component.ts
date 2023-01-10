import {Component, Input, OnInit} from '@angular/core';
import {Position} from "../../interfaces/Position";

@Component({
  selector: 'app-graphic-plane',
  templateUrl: './graphic.plane.component.html',
  styleUrls: ['./graphic.plane.component.css']
})
export class GraphicPlaneComponent implements OnInit {

  @Input() size! : number
  @Input() r! : number

  planeCellsX : number[] = []
  planeCellsY : number[] = []

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.r = Math.abs(this.r)
    let lineCount = 2 * this.r + Math.floor(this.r / 2) + 1
    this.planeCellsX = Array.from(Array(lineCount).keys()).map((el : number) => el * (this.size / 5 / this.r))
    this.planeCellsY = Array.from(Array(lineCount).keys()).map((el : number) => el * (this.size / 5 / this.r))
  }

}
