import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graphic-axes',
  templateUrl: './graphic.axes.component.html',
  styleUrls: ['./graphic.axes.component.css']
})
export class GraphicAxesComponent implements OnInit {

  @Input() r! : number

  constructor() { }

  ngOnInit(): void {
  }

}
