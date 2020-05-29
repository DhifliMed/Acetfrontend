import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiuri: string;
  headers: any = {'Content-Type': 'application/json'};

  constructor(private http: HttpClient, private userService: AuthService) {
    this.apiuri = environment.apiUrl;
  }

  get(url: string, data: any) {
    const options = {params: data, headers: this.headers};
    return this.http.get(this.apiuri + url, options).subscribe(
      (res) => {
        return res;
      },
      (error) => {
        return throwError('error ' + error);
      }
    );
  }

  post(url: string, data: any) {
    const options = {params: data, headers: this.headers};
    return this.http.post(this.apiuri + url, options).subscribe(
      (res: any) => {
        return res;
      },
      (error) => {
        return throwError('error ' + error);
      }
    );
  }

  put(url: string, data: any) {
    const options = {params: data, headers: this.headers};
    return this.http.put(this.apiuri + url, options).subscribe(
      (res: any) => {
        return res;
      },
      (error) => {
        return throwError('error ' + error);
      }
    );
  }

  delete(url: string, data: any) {
    const options = {params: data, headers: this.headers};
    return this.http.delete(this.apiuri + url, options).subscribe(
      (res: any) => {
        return res;
      },
      (error) => {
        return throwError('error ' + error);
      }
    );
  }


}
