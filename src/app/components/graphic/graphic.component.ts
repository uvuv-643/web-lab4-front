import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DotService} from "../../services/dot.service";
import {Dot} from "../../interfaces/Dot";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  size: number = Math.min(400, window.innerWidth - 50);
  @Input() points!: Dot[]
  @Input() r!: number

  @Output() updatePoints = new EventEmitter<void>();

  constructor(private dotService : DotService) {
  }

  ngOnInit() {
    setInterval(() => {
      if (window.innerWidth < 671) {
        this.size = window.innerWidth - 50;
      } else {
        this.size = 400
      }
    }, 400)
  }

  private onUpdatePoints() {
    this.updatePoints.emit()
  }

  public addPoint(event : MouseEvent) {
    const SCALABLE_COEFFICIENT = 1.25
    let userX : number = event.offsetX
    let userY : number = this.size - event.offsetY
    let actualX : number = (userX / this.size - 0.5) * 2 * this.r * SCALABLE_COEFFICIENT
    let actualY : number = (userY / this.size - 0.5) * 2 * this.r * SCALABLE_COEFFICIENT
    if (this.r) {
      this.dotService.addPoint(actualX, actualY, this.r).subscribe((ignored) => {
        this.dotService.getPoints().subscribe((points) => {
          this.points = points
          this.onUpdatePoints()
        });
      })
    }
  }

}
