import {Input, OnInit} from '@angular/core';
import {Component} from "@angular/core";
import {Dot} from "../../interfaces/Dot";

@Component({
  selector: 'app-graphic-table',
  templateUrl: './graphic.table.component.html',
  styleUrls: ['./graphic.table.component.css']
})

export class GraphicTableComponent implements OnInit {

  @Input() points! : Dot[];
  loading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 5000)
  }

  ngOnInit(): void {}

}
