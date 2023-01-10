import {Component, Input, OnInit} from '@angular/core';
import {Dot} from "../../interfaces/Dot";

@Component({
  selector: 'app-graphic-point',
  templateUrl: './graphic.point.component.html',
  styleUrls: ['./graphic.point.component.css']
})
export class GraphicPointComponent implements OnInit {

  @Input() point! : Dot
  @Input() size! : number
  @Input() r! : number

  top: number = 0;
  left: number = 0;
  hidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const SCALABLE_COEFFICIENT = 1.25
    if (this.point.x !== undefined && this.point.r !== undefined && this.point.y !== undefined ) {
      this.left = this.size * (this.point.x / (2 * this.r * SCALABLE_COEFFICIENT) + 0.5)
      this.top = this.size - this.size * (this.point.y / (2 * this.r * SCALABLE_COEFFICIENT) + 0.5)
      this.hidden = this.r === 0 || this.top < 0 || this.top > this.size || this.left < 0 || this.left > this.size
    }
  }

}
