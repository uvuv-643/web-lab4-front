import { Component } from '@angular/core';
import {DotService} from "../../services/dot.service";
import {Dot} from "../../interfaces/Dot";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dotService : DotService) {
  }

  points : Dot[] = []
  r : number = 1;

  private id : NodeJS.Timer | undefined

  ngOnInit() {
    this.updatePoints()
    this.id = setInterval(() => {
      this.updatePoints()
    }, 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  public updatePoints() {
    this.dotService.getPoints().subscribe((points) => {
      this.points = points.map((point : Dot) => {
        if (typeof point.createdAt === 'string') {
          point.createdAt = new Date(point.createdAt)
        }
        return point
      });
    });
  }

  onChangeRadius(radius : number) {
    console.log(radius)
    this.r = radius
    this.updatePoints()
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
