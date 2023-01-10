import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import * as url from "url";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public login(phone: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/auth',
      JSON.stringify({
        phone: phone,
        password: password,
      }), {
        responseType: 'text'
      }
    );
  }

  public register(
    username: string,
    password: string,
    phone: string,
    code : string
  ): Observable<any> {
    return this.http.post(
      environment.apiUrl + '/register',
      JSON.stringify({
        username: username,
        password: password,
        phone: phone,
        code: code,
      }),
      {responseType: 'json'}
    );
  }

  public sendSMS(
    phone: string,
  ): Observable<any> {
    return this.http.post(
      environment.apiUrl + '/sms',
      JSON.stringify({
        phone: phone,
      }),
      {
        headers: {
          "Content-Type": 'application/json'
        },
        responseType: 'json'}
    );
  }

  public clear() {
    return this.http.delete(
      environment.apiUrl + '/points'
    );
  }

  public addPoint(x : number, y : number, r : number) : Observable<any> {
    return this.http.post(
      environment.apiUrl + '/points',
      JSON.stringify({
        x: x,
        y: y,
        r: r
      }),
      {
        responseType: 'json',
      }
    );
  }

  public getPoints() : Observable<any> {
    return this.http.get(
      environment.apiUrl + '/points',
      {responseType: 'json'}
    );
  }

  constructor(private http: HttpClient) {
  }

}
