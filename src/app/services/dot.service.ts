import { Injectable } from '@angular/core';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class DotService {

  public clear() {
    return this.backendService.clear()
  }
  public addPoint(x : number, y : number, r : number) {
    return this.backendService.addPoint(x, y, r)
  }
  public getPoints() {
    return this.backendService.getPoints()
  }

  constructor(
    private backendService : BackendService
  ) { }
}
